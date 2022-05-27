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
import { ErrorPage404, ErrorPage404Info } from './pages';
import { HomePage, HomePageInfo } from './pages';
import { EggPage, EggPageInfo } from "./pages";

// Components
import { 
  Footer,
  FooterPropsInterface, 
  NavBar,
  NavBarPropsInterface
} from "./components"; 

const NavBarProps: NavBarPropsInterface = {
  navigations: [
    {
      label: HomePageInfo.navLabel || '',
      path: HomePageInfo.path,
      isinternal: true
    },
    {
      label: 'About',
      path: "https://houzairkoussa.herokuapp.com"
    },
    {
      label: 'Connect Wallet',
      path: ""
    }
  ]
}

const FooterProps: FooterPropsInterface = {
  
}

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
