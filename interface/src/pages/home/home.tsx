import React from "react";
import styled from "styled-components";

// Models
import { PagesModel } from "../../services/models";

export const HomePageInfo: PagesModel = {
  hasFooter: true,
  hasNavBar: true,
  path: "/",
  className: "homepage",
  navLabel: "Home"
}

export interface HomePagePropsInterface {
  
}

const HomePage: React.FunctionComponent<HomePagePropsInterface> = ({
  
}) => {
  return (
    <Style className={HomePageInfo.className}>
    </Style>
  );
}

const Style = styled.main<{className: string;}>`

`

export default HomePage;
