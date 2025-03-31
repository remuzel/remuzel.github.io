export interface MissionInfo {
  name: string;
  fullName?: string;
  description?: string;
  moreInfoUrl: string;
}

export const missionMap: Record<string, MissionInfo> = {
  "SOHO": {
    name: "SOHO",
    fullName: "Solar and Heliospheric Observatory",
    description: "A spacecraft studying the Sun, from its deep core to outer corona and solar wind.",
    moreInfoUrl: "https://science.nasa.gov/mission/soho/"
  },
  "SPP": {
    name: "PSP",
    fullName: "Parker Solar Probe",
    description: "The closest spacecraft to the Sun, studying the solar corona and solar wind.",
    moreInfoUrl: "https://science.nasa.gov/mission/parker-solar-probe/"
  },
  "JNO": {
    name: "Juno",
    fullName: "Juno Mission",
    description: "Spacecraft studying Jupiter's composition, gravity field, magnetic field, and polar magnetosphere.",
    moreInfoUrl: "https://science.nasa.gov/mission/juno/"
  },
  "M01O": {
    name: "Odyssey",
    fullName: "Mars Odyssey",
    description: "The longest-serving spacecraft at Mars, studying the planet's radiation environment.",
    moreInfoUrl: "https://science.nasa.gov/mission/odyssey/"
  },
  "LUCY": {
    name: "Lucy",
    fullName: "Lucy Mission",
    description: "The first mission to study Jupiter's Trojan asteroids, swarms of asteroids that share Jupiter's orbit.",
    moreInfoUrl: "https://science.nasa.gov/mission/lucy/"
  },
  "JWST": {
    name: "James Webb Space Telescope",
    fullName: "James Webb Space Telescope",
    description: "The most powerful space telescope ever built, observing distant objects in the universe.",
    moreInfoUrl: "https://science.nasa.gov/mission/webb/"
  },
  "STA": {
    name: "STEREO A & B",
    fullName: "Solar TErrestrial RElations Observatory",
    description: "A mission studying the structure and evolution of solar storms.",
    moreInfoUrl: "https://science.nasa.gov/mission/stereo/"
  },
  "LRO": {
    name: "LRO",
    fullName: "Lunar Reconnaissance Orbiter",
    description: "Spacecraft mapping the moon's surface and collecting data for future lunar missions.",
    moreInfoUrl: "https://science.nasa.gov/mission/lro/"
  },
  "MVN": {
    name: "MAVEN",
    fullName: "Mars Atmosphere and Volatile Evolution",
    description: "Studying Mars' upper atmosphere, ionosphere, and interactions with the sun and solar wind.",
    moreInfoUrl: "https://science.nasa.gov/mission/maven/"
  },
  "MRO": {
    name: "Mars Reconnaissance Orbiter",
    fullName: "Mars Reconnaissance Orbiter",
    description: "Searching for evidence of past water activity on Mars with high-resolution imagery.",
    moreInfoUrl: "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/"
  },
  "VGR2": {
    name: "Voyager",
    fullName: "Voyager 2",
    description: "One of the most distant human-made objects, now exploring interstellar space.",
    moreInfoUrl: "https://science.nasa.gov/mission/voyager/"
  },
  "CHDR": {
    name: "Chandrayaan",
    fullName: "Chandrayaan Mission",
    description: "Indian lunar exploration mission.",
    moreInfoUrl: "https://science.nasa.gov/science-missions/"
  },
  "DSCOVR": {
    name: "DSCOVR",
    fullName: "Deep Space Climate Observatory",
    description: "Stationed at the L1 Lagrange point, this sentinel spacecraft monitors solar storms while capturing stunning full-disk images of Earth from a million miles away — our planet's outpost in deep space.",
    moreInfoUrl: "https://science.nasa.gov/mission/dscovr/"
  },
  "HRMS": {
    name: "HERMES",
    fullName: "Heliophysics Environmental and Radiation Measurement Experiment Suite",
    description: "A miniaturized instrument suite headed to lunar orbit to study how solar particles and magnetic fields interact with airless planetary bodies, providing crucial data for future lunar explorers.",
    moreInfoUrl: "https://science.nasa.gov/mission/hermes/"
  },
  "PNCH": {
    name: "PUNCH",
    fullName: "Polarimeter to Unify the Corona and Heliosphere",
    description: "A constellation of four small satellites tracking the solar wind as it leaves the Sun, providing 3D views of the transition between the Sun's atmosphere and the solar wind that shapes space weather.",
    moreInfoUrl: "https://science.nasa.gov/mission/punch/"
  },
  "SDO": {
    name: "SDO",
    fullName: "Solar Dynamics Observatory",
    description: "NASA's solar watchdog that stares continuously at the Sun, capturing ultra-HD images of solar flares and eruptions in multiple wavelengths to help scientists understand our star's complex behavior.",
    moreInfoUrl: "https://science.nasa.gov/mission/sdo/"
  },
  "EUCL": {
    name: "Euclid",
    fullName: "Euclid Space Telescope",
    description: "A European space observatory mapping the dark universe by surveying billions of galaxies across 10 billion years of cosmic time to reveal how dark matter and dark energy have shaped our cosmos.",
    moreInfoUrl: "https://science.nasa.gov/mission/euclid/"
  },
  "XRSM": {
    name: "XRISM",
    fullName: "X-ray Imaging and Spectroscopy Mission",
    description: "A joint JAXA-NASA observatory using revolutionary microcalorimeter technology to study the universe's hottest regions, from black holes to galaxy clusters, with unprecedented spectral resolution.",
    moreInfoUrl: "https://science.nasa.gov/mission/xrism/"
  },
  "XMMN": {
    name: "XMM-Newton",
    fullName: "X-ray Multi-Mirror Mission",
    description: "ESA's mighty X-ray telescope with the largest effective area of any X-ray satellite, peering into extreme cosmic environments from supermassive black holes to neutron stars since 1999.",
    moreInfoUrl: "https://science.nasa.gov/mission/xmm-newton/"
  },
  "TESS": {
    name: "TESS",
    fullName: "Transiting Exoplanet Survey Satellite",
    description: "NASA's planet hunter scanning the sky sector by sector, searching for tiny dips in starlight that reveal thousands of exoplanets orbiting nearby stars in our galactic neighborhood.",
    moreInfoUrl: "https://science.nasa.gov/mission/tess/"
  },
  "SWFT": {
    name: "Swift",
    fullName: "Neil Gehrels Swift Observatory",
    description: "A rapid-response cosmic detective that swivels in seconds to catch gamma-ray bursts—the universe's most powerful explosions—and study their mysterious afterglows across multiple wavelengths.",
    moreInfoUrl: "https://science.nasa.gov/mission/swift/"
  },
  "SPRX": {
    name: "SPHEREx",
    fullName: "Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer",
    description: "An upcoming all-sky spectral survey mission that will create a cosmic map in 96 color bands, exploring everything from nearby icy asteroids to the ancient universe's first light.",
    moreInfoUrl: "https://science.nasa.gov/mission/spherex/"
  },
  "NSTR": {
    name: "NuSTAR",
    fullName: "Nuclear Spectroscopic Telescope Array",
    description: "The first focusing high-energy X-ray telescope in orbit, using specialized optics to study the hottest, most energetic objects in the universe with unprecedented clarity.",
    moreInfoUrl: "https://science.nasa.gov/mission/nustar/"
  },
  "IXPE": {
    name: "IXPE",
    fullName: "Imaging X-ray Polarimetry Explorer",
    description: "A first-of-its-kind X-ray polarimeter revealing the geometry and magnetic fields of cosmic X-ray sources by measuring the polarization of X-rays from supernova remnants, black holes, and neutron stars.",
    moreInfoUrl: "https://science.nasa.gov/mission/ixpe/"
  },
  "HST": {
    name: "Hubble",
    fullName: "Hubble Space Telescope",
    description: "Astronomy's revolutionary eye in the sky that has transformed our view of the cosmos with over three decades of iconic images, from stellar nurseries to the deepest galaxy fields ever observed.",
    moreInfoUrl: "https://science.nasa.gov/mission/hubble/"
  },
  "HIND": {
    name: "Hinode",
    fullName: "Hinode Solar Observatory",
    description: "A solar observatory using three specialized instruments to study the Sun's magnetic fields and how they drive solar activity, from the photosphere to the corona.",
    moreInfoUrl: "https://science.nasa.gov/mission/hinode/"
  },
  "GAIA": {
    name: "Gaia",
    fullName: "Gaia Space Observatory",
    description: "ESA's cosmic cartographer precisely mapping over a billion stars in our galaxy, measuring their positions, distances, and motions to create the most detailed 3D map of the Milky Way ever constructed.",
    moreInfoUrl: "https://science.nasa.gov/mission/gaia/"
  },
  "FRMI": {
    name: "Fermi",
    fullName: "Fermi Gamma-ray Space Telescope",
    description: "NASA's high-energy detective scanning the entire sky every three hours, revealing pulsars, blazars, and other extreme phenomena through the gamma-ray window—light millions to billions of times more energetic than visible light.",
    moreInfoUrl: "https://science.nasa.gov/mission/fermi/"
  },
};

// Fallback function for unknown missions
export function getMissionInfo(missionCode: string): MissionInfo {
  return missionMap[missionCode] || {
    name: missionCode,
    fullName: missionCode,
    description: "NASA spacecraft mission.",
    moreInfoUrl: `https://science.nasa.gov/science-missions/`
  };
}
