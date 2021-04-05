import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { AuthContext } from '../../auth/AuthContext'

describe('Pruebas en el componente <DashboardRoutes />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Eliseo'
        }
    }

    test('Debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('span').text().trim()).toBe('Eliseo')
    })
    


    
})
