import keys from "../common/marvel-api-params";
import CryptoJS from "crypto-js";
var hash = CryptoJS.MD5(keys.ts + keys.pvtkey + keys.pubkey);

const getList = () => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${keys.ts}&apikey=${keys.pubkey}&hash=${hash}&limit=100`
  )
    .then((response) => response.json())
    .then((data) => data.data.results);
};

const getCharById = (charId) => {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${charId}?ts=${keys.ts}&apikey=${keys.pubkey}&hash=${hash}`
  )
    .then((response) => response.json())
    .then((data) => data.data.results);
};

export { getList, getCharById };
