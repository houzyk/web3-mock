import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Global Styles
import './global.scss';

// Components
import { 
  Footer,
  NavBar
} from "./components"; 

// Data
import { NavBarProps, FooterProps, RoutesData } from "./data";

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            { RoutesData.map((route, index) => (
                <Route 
                  path={route.path} 
                  element={(
                            <>
                              {route?.hasNavBar && <NavBar styleOveride={route.className} {...NavBarProps} />}
                                {route.element}
                              {route?.hasFooter && <Footer styleOveride={route.className} {...FooterProps}/>}
                            </>
                          )} 
                  key={index}
                />
              ))
            }
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );
}
