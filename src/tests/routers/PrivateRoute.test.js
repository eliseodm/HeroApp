import React from 'react'
import { mount } from 'enzyme'

import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router'

describe('Peruebas en <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()

    test('Debe de mostrar el componente si esta autenticado y guardar locaslStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
            )

            expect( wrapper.find('span').exists()).toBe( true )
            expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
    })

    test('Deve de bloquear el componente si no esta autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
            )

            expect( wrapper.find('span').exists()).toBe( false )
            expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')

    })
    
    
    
})
