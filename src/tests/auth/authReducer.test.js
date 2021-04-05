
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

types

/* const state = {
    name: 'Eliseo',
    logeed: true
} */



describe('Pruebas en authReducer', () => {

    test('Debe de retornrar el estado por defecto', () => {

        const defaultState = authReducer( { logged: false}, {} )

        expect( defaultState ).toEqual( {logged: false} )
        
       
    })

    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Eliseo'
            }
        }
        
        const authState = authReducer( { logged: false }, action) 

        expect( authState ).toEqual({ name: 'Eliseo', logged: true })
        
    })

    test('Debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout,
            payload: {
                name: 'Eliseo'
            }
        }
        
        const authState = authReducer( { logged: true }, action) 

        expect( authState ).toEqual({ logged: false })
    })
    
    
    
    
})
