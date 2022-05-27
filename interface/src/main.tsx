import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Global Styles
import './global.scss';

//  Models
import { RoutesModel } from "./helpers/models";

// Pages
import ErrorPage404, { ErrorPage404Info } from './pages/errors/errorpage404';
import HomePage, { HomePageInfo } from './pages/home/home';
import EggPage, { EggPageInfo } from "./pages/egg/eggpage";

// Components
import Footer from "./components/footer/footer"; 
import NavBar from "./components/header/navbar"; 

const routes: Array<RoutesModel> = [
  {
    ...ErrorPage404Info,
    element: <ErrorPage404/>,
  },
  {
    ...HomePageInfo,
    element: <HomePage/>,
  },
  {
    ...EggPageInfo,
    element: <EggPage/>,
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
                              {route?.hasNavBar && <NavBar styleOveride=''/>}
                                {route.element}
                              {route?.hasFooter && <Footer styleOveride=''/>}
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
