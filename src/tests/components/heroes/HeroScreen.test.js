import React from 'react'
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen'
import { MemoryRouter, Route } from 'react-router'


describe('Pruebas en el <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
    
                <HeroScreen history={ historyMock } />
    
            </MemoryRouter>
            )
        
        expect( wrapper.find('Redirect').exists() ).toBe(true)
    })

    test('Debe de mostrar un heroe si el aprametro existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('.row').exists() ).toBe( true )
        
    })
    
    test('Debe de regresar a la pantalla anterior con PUSH', () => {

        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history={ historyMock } /> } 
            />
            </MemoryRouter>
        )
        
        wrapper.find('button').prop('onClick')()

        expect( historyMock.push ).toHaveBeenCalledWith('/')
        expect( historyMock.goBack ).not.toHaveBeenCalled()
    })

    test('Debe de regresar a la pantalla anterior GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history={ historyMock } /> } 
            />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()


        expect( historyMock.push ).not.toHaveBeenCalled()
        expect( historyMock.goBack ).toHaveBeenCalled()
        
    })

    test('Debe de llamar a redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine123124513254'] }>
                <Route 
                path="/hero/:heroeId" 
                component={ () => <HeroScreen history={ historyMock } /> } 
            />
            </MemoryRouter>
        )

        expect( wrapper.text() ).toBe( '' )


        
    })
    
    
    
    
})
