import type { DSNData, Dish, MissionData, Station } from './types';

/**
 * Parse XML string to get DSN data
 */
export function parseXML(xmlString: string): DSNData {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Parse stations
  const stationNodes = xmlDoc.getElementsByTagName('station');
  const stations: Station[] = [];
  for (let i = 0; i < stationNodes.length; i++) {
    const station = stationNodes[i];
    stations.push({
      name: station.getAttribute('name') || '',
      friendlyName: station.getAttribute('friendlyName') || '',
      timeUTC: station.getAttribute('timeUTC') || '',
      timeZoneOffset: station.getAttribute('timeZoneOffset') || '',
    });
  }

  // Parse dishes
  const dishNodes = xmlDoc.getElementsByTagName('dish');
  const dishes: Dish[] = [];
  for (let i = 0; i < dishNodes.length; i++) {
    const dish = dishNodes[i];
    const dishData: Dish = {
      name: dish.getAttribute('name') || '',
      azimuthAngle: dish.getAttribute('azimuthAngle') || '',
      elevationAngle: dish.getAttribute('elevationAngle') || '',
      windSpeed: dish.getAttribute('windSpeed') || '',
      isMSPA: dish.getAttribute('isMSPA') === 'true',
      isArray: dish.getAttribute('isArray') === 'true',
      isDDOR: dish.getAttribute('isDDOR') === 'true',
      upSignal: [],
      downSignal: [],
      target: [],
    };

    // Parse signals
    const upSignalNodes = dish.getElementsByTagName('upSignal');
    for (let j = 0; j < upSignalNodes.length; j++) {
      const signal = upSignalNodes[j];
      dishData.upSignal?.push({
        signalType: signal.getAttribute('signalType') as 'active' | 'inactive',
        dataRate: signal.getAttribute('dataRate') || '',
        frequency: signal.getAttribute('frequency') || '',
        band: signal.getAttribute('band') || '',
        power: signal.getAttribute('power') || '',
        spacecraft: signal.getAttribute('spacecraft') || '',
        spacecraftID: signal.getAttribute('spacecraftID') || '',
      });
    }

    const downSignalNodes = dish.getElementsByTagName('downSignal');
    for (let j = 0; j < downSignalNodes.length; j++) {
      const signal = downSignalNodes[j];
      dishData.downSignal?.push({
        signalType: signal.getAttribute('signalType') as 'active' | 'inactive',
        dataRate: signal.getAttribute('dataRate') || '',
        frequency: signal.getAttribute('frequency') || '',
        band: signal.getAttribute('band') || '',
        power: signal.getAttribute('power') || '',
        spacecraft: signal.getAttribute('spacecraft') || '',
        spacecraftID: signal.getAttribute('spacecraftID') || '',
      });
    }

    // Parse targets
    const targetNodes = dish.getElementsByTagName('target');
    for (let j = 0; j < targetNodes.length; j++) {
      const target = targetNodes[j];
      dishData.target?.push({
        name: target.getAttribute('name') || '',
        id: target.getAttribute('id') || '',
        uplegRange: target.getAttribute('uplegRange') || '',
        downlegRange: target.getAttribute('downlegRange') || '',
        rtlt: target.getAttribute('rtlt') || '',
      });
    }

    dishes.push(dishData);
  }

  // Parse timestamp
  const timestamp = xmlDoc.getElementsByTagName('timestamp')[0]?.textContent || '';

  return {
    stations,
    dishes,
    timestamp,
  };
}

/**
 * Get unique mission data from DSN data
 */
export function extractMissions(dsnData: DSNData): MissionData[] {
  const missions: Record<string, MissionData> = {};

  dsnData.dishes.forEach(dish => {
    const stationPrefix = dish.name.substring(0, 3);
    const station = dsnData.stations.find(s =>
      s.name === 'gdscc' && stationPrefix === 'DSS' && parseInt(dish.name.slice(3)) < 30 ||
      s.name === 'mdscc' && stationPrefix === 'DSS' && parseInt(dish.name.slice(3)) >= 50 && parseInt(dish.name.slice(3)) < 70 ||
      s.name === 'cdscc' && stationPrefix === 'DSS' && parseInt(dish.name.slice(3)) >= 30 && parseInt(dish.name.slice(3)) < 50
    );

    // Process all targets in the dish
    dish.target?.forEach(target => {
      const codename = target.name;

      if (!missions[codename]) {
        // Initialize mission data
        missions[codename] = {
          name: codename,
          codename: codename,
          isActive: false,
          signals: {
            uplink: false,
            downlink: false,
            bands: [],
            dataRates: {}
          },
          distance: {
            value: formatDistance(target.uplegRange),
            formatted: formatDistanceWithUnits(target.uplegRange)
          },
          roundTripLightTime: {
            seconds: parseFloat(target.rtlt),
            formatted: formatLightTime(target.rtlt)
          },
          dish: {
            name: dish.name,
            station: station?.name || '',
            stationName: station?.friendlyName || ''
          }
        };
      }

      // Check for uplink signals
      const upSignal = dish.upSignal?.find(s => s.spacecraft === codename);
      if (upSignal && upSignal.signalType === 'active') {
        missions[codename].isActive = true;
        missions[codename].signals.uplink = true;
        if (!missions[codename].signals.bands.includes(upSignal.band)) {
          missions[codename].signals.bands.push(upSignal.band);
        }
        missions[codename].signals.dataRates.uplink = formatDataRate(upSignal.dataRate);
      }

      // Check for downlink signals
      const downSignals = dish.downSignal?.filter(s => s.spacecraft === codename) || [];
      downSignals.forEach(signal => {
        if (signal.signalType === 'active') {
          missions[codename].isActive = true;
          missions[codename].signals.downlink = true;
          if (!missions[codename].signals.bands.includes(signal.band)) {
            missions[codename].signals.bands.push(signal.band);
          }
          missions[codename].signals.dataRates.downlink = formatDataRate(signal.dataRate);
        }
      });
    });
  });

  return Object.values(missions)
    .filter(mission => mission.isActive)
    .sort((a, b) => {
      // Sort by distance (furthest first)
      return parseFloat(b.distance.value) - parseFloat(a.distance.value);
    });
}

/**
 * Format distance value
 */
function formatDistance(distance: string): string {
  const value = parseFloat(distance);

  if (isNaN(value)) return '0';

  // Scientific notation like 1.94e+08
  if (distance.includes('e+')) {
    return distance;
  }

  return value.toString();
}

/**
 * Format distance with appropriate units
 */
function formatDistanceWithUnits(distance: string): string {
  const value = parseFloat(distance);

  if (isNaN(value)) return '0 km';

  // Convert to km
  const km = value / 1000;

  if (km < 1000) {
    return `${km.toFixed(0)} km`;
  } else if (km < 1000000) {
    return `${(km / 1000).toFixed(2)} thousand km`;
  } else if (km < 1000000000) {
    return `${(km / 1000000).toFixed(2)} million km`;
  } else {
    return `${(km / 1000000000).toFixed(2)} billion km`;
  }
}

/**
 * Format light time
 */
function formatLightTime(rtlt: string): string {
  const seconds = parseFloat(rtlt);

  if (isNaN(seconds)) return '0s';

  if (seconds < 60) {
    return `${seconds.toFixed(1)} seconds`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds.toFixed(0)}s`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  } else {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    return `${days}d ${hours}h`;
  }
}

/**
 * Format data rate
 */
function formatDataRate(dataRate: string): string {
  const rate = parseFloat(dataRate);

  if (isNaN(rate)) return '0 bps';

  // Convert scientific notation
  if (dataRate.includes('e+')) {
    const [mantissa, exponent] = dataRate.split('e+');
    const value = parseFloat(mantissa) * Math.pow(10, parseInt(exponent));

    if (value < 1000) {
      return `${value.toFixed(0)} bps`;
    } else if (value < 1000000) {
      return `${(value / 1000).toFixed(2)} kbps`;
    } else {
      return `${(value / 1000000).toFixed(2)} Mbps`;
    }
  }

  if (rate < 1000) {
    return `${rate.toFixed(0)} bps`;
  } else if (rate < 1000000) {
    return `${(rate / 1000).toFixed(2)} kbps`;
  } else {
    return `${(rate / 1000000).toFixed(2)} Mbps`;
  }
}
