import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en el authReducer', () => { 

    test('Debe de retornar el estado por defecto', () => { 
       const  state  = authReducer({ logged: false }, {})

       expect(state).toEqual({ logged: false })
     });
    
    
     test('Debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Juan'
            }
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            ...state,
            logged: true,
            user: action.payload

        });
       
     });
    
     test('debe de (logout) borrar el name del usuario y logged', () => { 

        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }

        const action = {
            type: types.logout
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual({
            logged: false
        })

       
     })
 })