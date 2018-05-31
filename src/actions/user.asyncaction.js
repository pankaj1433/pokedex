import {
    asyncCurrentUserSuccess,
    asyncCurrentUserFailed,
    asyncloaderStarted,
  } from './user.action'
  
  import {
    fetchURI ,
    fetchdisLikeURI,
    fetchCurrentUserURI,
  
  } from '../config/constants'
  
  // import fetch from 'isomorphic-fetch'
  
const uri  = 'http://pokeapi.com/api/v2/';
  export  const asyncgetCurrentUser =() =>{
    return(dispatch) =>{
      // dispatch(asyncloaderStarted());
      return fetch('https://pokeapi.co/api/v1/pokedex/1/',{
        mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(function(data){
          console.log('data', data.json())
        }).then(function(val){
          console.log('val',val)
        })
        .catch(function(err){
          console.log('err', err)
        })
    }
  };
  