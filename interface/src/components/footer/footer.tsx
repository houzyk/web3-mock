import React from "react";
import styled from "styled-components";

/**
 * @styleOveride {string} Class name to overide styles Optional
 * @returns Footer component (JSX)
*/

export interface FooterPropsInterface {
  styleOveride?: string;
}

const Footer: React.FunctionComponent<FooterPropsInterface> = ({
  styleOveride
}) => {
  return (
    <Style className={["footer", styleOveride || ''].join(" ")}>

    </Style>
  );
}

const Style = styled.footer<{className: string;}>`
  &.footer {

  }
`

export default Footer;