import ActionTypes from '../constants/ActionTypes.js';

const initialState={
    list:[]
};


const ProductReducers=(state=initialState,action)=>{

    switch(action.type){

        case ActionTypes.SET_DATA:
            return{
                ...state,
                list:action.payload
            };
         
        default:
            return state;
    };

}


export default ProductReducers;