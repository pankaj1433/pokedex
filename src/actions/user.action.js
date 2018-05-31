import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    SET_LOADING_TRUE,
  
  } from '../config/constants'
  
  export const asyncloaderStarted = () =>{
    return{
      type:SET_LOADING_TRUE
    }
  };
  
  export const asyncCurrentUserSuccess =(data) =>{
    return{
      type:FETCH_USER_SUCCESS,data,
    }
  };
  
  export const asyncCurrentUserFailed = (err) =>{
    return{
      type:FETCH_USER_FAILED,err,
    }
  };
  