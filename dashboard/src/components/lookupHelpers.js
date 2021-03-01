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
  "Faxanadu (USA)": "Faxanadu",
  "Goldeneye 007 (E)": "Goldeneye",
  "Double Dragon 2 - The Revenge": "Double Dragon 2",
  "Contra III - The Alien Wars": "Contra III",
  "Legend of Zelda, The - A Link to the Past": "Zelda Link To The Past",
  "Street Fighter II Turbo": "Street Fighter II"
};

export const getGame = (game) => {
  return gameLookup[game] ? gameLookup[game] : game;
};