import React from "react";
import styled from "styled-components";

// Models
import { PagesModel } from "../../helpers/models";

export const ErrorPage404Info: PagesModel = {
  path: "*",
  className: "errorpage-404"
}

export interface ErrorPage404PropsInterface {
  
}

const ErrorPage404: React.FunctionComponent<ErrorPage404PropsInterface> = ({
  
}) => {
  return (
    <Style className={ErrorPage404Info.className}>
      HELLO
    </Style>
  );
}

const Style = styled.main<{className: string;}>`

`

export default ErrorPage404;
