import React from "react";
import styled from "styled-components";

export interface HomePagePropsInterface {

}

const HomePage: React.FunctionComponent<HomePagePropsInterface> = ({
  
}) => {
  return (
    <Style className="homepage">
    </Style>
  );
}

const Style = styled.main<{className: string;}>`
  &.homepage {
    
  }
`

export default HomePage;
