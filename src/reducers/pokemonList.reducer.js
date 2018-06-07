import { POKEMON_ACTION }from '../config/constants';

const initialState ={
  list : [],
};

export const pokemonList = (state=initialState,action) =>{
    switch(action.type){

      case POKEMON_ACTION.LIST.STORE :
        return { 
          ...state, 
          list: action.list,
          next: action.next,
          previous: action.previous
         };
      default:
        return state;
    }
    return state;
};

export const pokemonListData = (state=[],action) =>{
  switch(action.type){
    case POKEMON_ACTION.LIST.STORE_DATA :
      return [...action.data]
    default:
      return state;
  }
  return state;
};

export const randomPokemon = (state={},action) =>{
  switch(action.type){
    case POKEMON_ACTION.LIST.RANDOM_POKEMON :
      return {...state, data: action.data}
    default:
      return state;
  }
  return state;
};
