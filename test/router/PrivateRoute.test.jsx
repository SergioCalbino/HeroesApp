import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/Privateroute";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el <PrivateRoute />", () => {
  
    test("Si esta autenticado debe de mostar el children", () => {

        Storage.prototype.setItem = jest.fn()
    
        const contextValue = {
        logged: true,
        user: {
            id: "abc",
            name: "Goku",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //  screen.debug()
    expect(screen.getByText("Ruta Privada")).toBeTruthy;
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath' , '/search?q=batman')
  });
});
