import ActionTypes from '../constants/ActionTypes.js';

export const setData=(temp)=>{

    return{
        type:ActionTypes.SET_DATA,
        payload:temp
    }
}


