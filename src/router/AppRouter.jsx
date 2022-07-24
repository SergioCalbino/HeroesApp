import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./Privateroute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>

      

      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        } />

        // El PrivateRoute es el que determina si se puede acceder al componente de las rutas de los heroes
        <Route path="/*" element= {
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        } />
        
        {/* <Route path="login" element={<LoginPage/>} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes/> } /> */}
       
      </Routes>
    </>
  );
};
