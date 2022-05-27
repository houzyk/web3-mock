import React from "react";
import styled from "styled-components";

// Models
import { PagesModel } from "../../services/models";

export const EggPageInfo: PagesModel = {
  hasFooter: true,
  hasNavBar: true,
  path: "/egg",
  className: "eggpage"
}

export interface EggPagePropsInterface {
  
}

const EggPage: React.FunctionComponent<EggPagePropsInterface> = ({
  
}) => {
  return (
    <Style className={EggPageInfo.className}>
      
    </Style>
  );
}

const Style = styled.main<{className: string;}>`

`

export default EggPage;
