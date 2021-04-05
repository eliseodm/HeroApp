import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthContext'
import { LoginScreen } from '../../components/login/LoginScreen'
import { types } from '../../types/types'

 describe('Pruebas en el componente <LoginScreen />', () => {

    const historyMock = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(

        <AuthContext.Provider value={ contextValue }>

            <MemoryRouter>

                <LoginScreen history={ historyMock }/>

            </MemoryRouter>

        </AuthContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {


        expect( wrapper ).toMatchSnapshot()
        
    })

    test('Debe de realisar el dispatch y la navegacion', () => {

        const handleClick = wrapper.find('button').prop('onClick')

        handleClick()

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Eliseo'
            }
        })
        expect( historyMock.replace ).toHaveBeenCalledWith('/')
        
        localStorage.setItem('lastPath','/dc')
        handleClick()

        expect( historyMock.replace ).toHaveBeenCalledWith('/dc')
    })
    
    
     
 })
 
