import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/**
 * @styleOveride {string} Class name to overide styles Optional
 * @navigations {array} Array containing navigation bar links
 * @returns Navbar component (JSX)
*/

export interface NavBarPropsInterface {
  styleOveride?: string;
  navigations: {
    label: string;
    path: string;
    className?: string;
    isinternal?: boolean;
  }[];
}

const Navbar: React.FunctionComponent<NavBarPropsInterface> = ({
  styleOveride,
  navigations
}) => {
  return (
    <Style className={["nav-bar", styleOveride || ''].join(" ")}>
      <ul className="nav-bar-list">
        {navigations && navigations.map((navigation, index) => (
          <li className={["nav-bar-list__link", navigation?.className || ''].join(" ")} key={index}>   
            {
              navigation?.isinternal ? 
                <NavLink to={navigation?.path || ''}>
                  {navigation?.label || ''}
                </NavLink>
              :
                <a href={navigation?.path || ''} target="_blank">
                  {navigation?.label || ''}
                </a>
            }       
          </li>
        ))}
      </ul>
    </Style>
  );
}

const Style = styled.nav<{className: string;}>`
  &.nav-bar {

  }
`

export default Navbar;