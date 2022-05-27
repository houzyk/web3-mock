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
  title: string;
  navigations: {
    label: string;
    path?: string;
    className?: string;
    isinternal?: boolean;
    isCTA?: boolean;
  }[];
  hamburger?: any;
}

const Navbar: React.FunctionComponent<NavBarPropsInterface> = ({
  styleOveride,
  navigations,
  title,
  hamburger
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
      <div className="nav-bar-content">
        <p className="nav-bar-title">{title || ''}</p>
        <ul className="nav-bar-list">
          { !!navigations && navigations.map((navigation, index) => (
            <li className={["nav-bar-list__link", navigation?.className || ''].join(" ")} key={index} tabIndex={index + 1}>   
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
        <div>
          {hamburger || null}
        </div>
      </div>
    </Style>
  );
}

const Style = styled.nav<{className: string;}>`

`

export default Navbar;