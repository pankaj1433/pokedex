import { combineReducers } from 'redux';

//reducers
import {pokemonList, pokemonListData, randomPokemon} from "./pokemonList.reducer";
import loader from "./loader.reducer";

export const rootReducer  =  combineReducers({
    loader,
    pokemonList,
    pokemonListData,
    randomPokemon,
});