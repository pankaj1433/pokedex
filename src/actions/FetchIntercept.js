import { API_ROOT } from '../config/constants';
import axios from "axios";

let handleCommonError = err => {
  console.log('Common Fetch Error', err);
};
  
export const FetchIntercept = (url) => {
  return axios.get(url,{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .catch(handleCommonError)
}

export const FetchMultiplePokemons = urls => {
  console.log('urls>>>>>',urls);
  let promises = [];
  urls.map((pokemon) => {
    promises.push(axios.get(pokemon.url,{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }));
  })
  return axios.all(promises)
}