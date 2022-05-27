import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './global.scss';

// Pages
import HomePage from './pages/home/home';

// Components
import Footer from "./components/footer/footer"; 
import NavBar from "./components/header/navbar"; 

const routes: Array<{
  hasNavBar: boolean;
  hasFooter: boolean;
  path: string;
  element: ReactNode;
}> = [
  {
    hasNavBar: true,
    hasFooter: true,
    path: "/",
    element: <HomePage/>
  }
];

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            { routes.map((route, index) => (
                <Route 
                  path={route.path} 
                  element={(
                            <>
                              {route.hasNavBar && <NavBar/>}
                                {route.element}
                              {route.hasFooter && <Footer/>}
                            </>
                          )} 
                  key={index}
                />
              ))
            }
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  )
}
