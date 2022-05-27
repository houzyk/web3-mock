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
    path?: string;
    className?: string;
    isinternal?: boolean;
    isCTA?: boolean;
  }[];
}

const Navbar: React.FunctionComponent<NavBarPropsInterface> = ({
  styleOveride,
  navigations
}) => {

  const LinkWrapper = React.memo<{path: string; label: string; isinternal: boolean;}>(({
    path,
    label,
    isinternal
  }) => (
    isinternal ? 
      <NavLink to={path || ''}>
        {label || ''}
      </NavLink>
      :
      <a href={path || ''} target="_blank">
        {label || ''}
      </a>
  ));

  return (
    <Style className={["nav-bar", styleOveride || ''].join(" ")}>
      <ul className="nav-bar-list">
        {!!navigations && navigations.map((navigation, index) => (
          <li className={["nav-bar-list__link", navigation?.className || ''].join(" ")} key={index}>   
            { navigation?.isCTA ?
              <button className='nav-bar-list__cta'>
                {navigation?.label || ''}
              </button>
              :
              <LinkWrapper 
                path={navigation?.path || ''} 
                label={navigation?.label || ''} 
                isinternal={navigation.isinternal || false}
              />     
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