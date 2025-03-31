export interface Station {
  name: string;
  friendlyName: string;
  timeUTC: string;
  timeZoneOffset: string;
}

export interface Signal {
  signalType: 'active' | 'inactive';
  dataRate: string;
  frequency: string;
  band: string;
  power: string;
  spacecraft: string;
  spacecraftID: string;
}

export interface Target {
  name: string;
  id: string;
  uplegRange: string;
  downlegRange: string;
  rtlt: string;
}

export interface Dish {
  name: string;
  azimuthAngle: string;
  elevationAngle: string;
  windSpeed: string;
  isMSPA: boolean;
  isArray: boolean;
  isDDOR: boolean;
  upSignal?: Signal[];
  downSignal?: Signal[];
  target?: Target[];
}

export interface DSNData {
  stations: Station[];
  dishes: Dish[];
  timestamp: string;
}

export interface MissionData {
  name: string;
  codename: string;
  isActive: boolean;
  signals: {
    uplink: boolean;
    downlink: boolean;
    bands: string[];
    dataRates: {
      uplink?: string;
      downlink?: string;
    }
  };
  distance: {
    value: string;
    formatted: string;
  };
  roundTripLightTime: {
    seconds: number;
    formatted: string;
  };
  dish: {
    name: string;
    station: string;
    stationName: string;
  };
}
