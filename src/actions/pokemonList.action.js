import { API_ROOT, POKEMON_ACTION, API } from '../config/constants';
import {FetchIntercept, FetchMultiplePokemons} from './FetchIntercept';
import {showLoader, hideLoader} from './loader.action';

export const getPokemonList = (url) => {
  return (dispatch) => {
    let requestUrl = url ? url: `${API_ROOT}${API.POKEDEX}`
    dispatch(showLoader());
    FetchIntercept(requestUrl)
    .then( res => {
        if(res && res.status===200) {
          let {results, next, previous } = res.data;
          if(results && results.length) {
            dispatch({ 
              type: POKEMON_ACTION.LIST.STORE , 
              list : results, 
              next: next,
              previous: previous
            });
          }
        }
        return res.data;
    })
    .then((res) => {
      let {results} = res;
      FetchMultiplePokemons(res.results)
      .then(response => {
        dispatch(hideLoader());
        dispatch({ type: POKEMON_ACTION.LIST.STORE_DATA , data : response });
      });
    })
  };
}

export const getPokemon = (id) => {
  console.log(id,"...")
  return (dispatch) => {
    FetchIntercept(`${API_ROOT}${API.POKEMON}${id}`).then((res)=>{
      if(res && res.status===200) {
        if(res.data && Object.keys(res.data).length) 
          dispatch({ type: POKEMON_ACTION.LIST.RANDOM_POKEMON , data : res.data });
      }
    })
  }
}