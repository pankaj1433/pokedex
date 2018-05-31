import { API_ROOT, POKEMON_ACTION, API } from '../config/constants';
import FetchIntercept from './FetchIntercept';
import {showLoader, hideLoader} from './loader.action';

export const getPokemonList = (url) => {
  return (dispatch) => {
    let requestUrl = url || `${API_ROOT}${API.POKEDEX}`
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
          //get pokemons data
          res.results.map((item) => {
            FetchIntercept(item.url).then((res)=>{
              if( Object.keys(res).length) 
                dispatch({ type: POKEMON_ACTION.LIST.STORE_DATA , data : res });
            });
          });
        }
    }).then( () => dispatch(hideLoader()) )
  };
}
  