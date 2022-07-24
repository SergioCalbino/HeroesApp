import { types } from "../types/types";




export const authReducer = ( state = {}, action ) => {
   
    switch (action.type) { //Estos types vienen importados del types.js
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload

            };
        
        case types.logout:
            return {
                logged: false
            };
            
            
    
        default:
            return state;
    }
}