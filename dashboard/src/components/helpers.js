export const platformLookup = {
  "snes": "Super Nintendo",
  "nes": "Nintendo",
  "megadrive": "Sega Genesis",
  "n64": "Nintendo 64"
};

export const getPlatform = (platform) => {
  return platformLookup[platform] ? platformLookup[platform] : platform;
};

export const gameLookup = {
  "altbeast": "Altered Beast",
  "RiverCityRansom": "River City Ransom",
  "Faxanadu (USA)": "Faxanadu"
};

export const getGame = (game) => {
  return gameLookup[game] ? gameLookup[game] : game;
};