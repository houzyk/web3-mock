import React from "react";
import styled from "styled-components";

/**
 * @styleOveride {string} Class name to overide styles Optional
 * @returns Navbar component (JSX)
*/

export interface NavBarPropsInterface {
  styleOveride?: string;
}

const Navbar: React.FunctionComponent<NavBarPropsInterface> = ({
  styleOveride
}) => {
  return (
    <Style className={["nav-bar", styleOveride || ''].join(" ")}>

    </Style>
  );
}

const Style = styled.nav<{className: string;}>`
  &.nav-bar {

  }
`

export default Navbar;