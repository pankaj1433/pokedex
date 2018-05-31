import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    SET_LOADING_TRUE,
}from '../config/constants'

const initialState ={
    users : [],
    loading : true,
    err: '',
};

export const userReducers = (state=initialState,action) =>{
    switch(action.type){

      case SET_LOADING_TRUE:
        return {
          ...state,
          loading: true,
        };

      case FETCH_USER_SUCCESS:{
        const users = action.data;
        return{
          ...state,
          users:users,
          loading:false,
        }
      }
      case FETCH_USER_FAILED:{
        return{
          ...state,
          err:action.err,
          loading:false,
        }
      }
    }
    return state;
};
