import { combineReducers } from 'redux';

//reducers
import {pokemonList, pokemonListData} from "./pokemonList.reducer";
import loader from "./loader.reducer"

export const rootReducer  =  combineReducers({
    loader,
    pokemonList,
    pokemonListData,
});