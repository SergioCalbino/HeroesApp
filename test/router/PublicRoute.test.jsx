import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'
import { MemoryRouter, Routes, Route } from 'react-router-dom'



describe('Pruebas en <PublicRoute/>', () => { 

    test('Si no esta autenticado debe de mostar el children', () => { 

        const contextValue = {
            logged: false
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
         )
        //  screen.debug()
        expect( screen.getByText('Ruta Pública') ).toBeTruthy
     })

     test('Debe de navegar si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                name: 'Gohan',
                id: 'ABC123'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>

                        }/>
                        <Route path='marvel' element={ <h1> Pagina Marvel </h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
         )


        expect( screen.getByText('Pagina Marvel') ).toBeTruthy()
      })
 })