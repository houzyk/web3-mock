import React from "react";

export interface PagesModel {
  hasNavBar?: boolean;
  hasFooter?: boolean;
  path: string;
  className: string;
  navLabel?: string;
}

export interface RoutesModel extends PagesModel {
  element: React.ReactNode;
}