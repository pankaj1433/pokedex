import { API_ROOT, POKEMON_ACTION, API } from '../config/constants';
import FetchIntercept from './FetchIntercept';
import {showLoader, hideLoader} from './loader.action';

export const getPokemonList = (url) => {
  console.log('url>>',url)
  return (dispatch) => {
    let requestUrl = url ? url: `${API_ROOT}${API.POKEDEX}`
    dispatch(showLoader());
    FetchIntercept(requestUrl)
    .then( res => {
        if(res.results && res.results.length) {
          dispatch({ 
            type: POKEMON_ACTION.LIST.STORE , 
            list : res.results, 
            next:res.next,
            previous: res.previous
          });
        }
        return res;
    })
    .then((res) => {
      // get pokemons data
      res.results.map((item, index) => {
        FetchIntercept(item.url).then((res)=>{
          if( Object.keys(res).length) 
            dispatch({ type: POKEMON_ACTION.LIST.STORE_DATA , data : res });
        })
        .then(() => {
          if( res.results.length == index+1 ) {
            dispatch(hideLoader())
          }
        });
      });
    })
  };
}

export const getPokemon = (id) => {
  console.log(id,"...")
  return (dispatch) => {
    FetchIntercept(`${API_ROOT}${API.POKEMON}${id}`).then((res)=>{
      console.log(res);
      if( Object.keys(res).length) 
        dispatch({ type: POKEMON_ACTION.LIST.RANDOM_POKEMON , data : res });
    })
  }
}