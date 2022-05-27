// Models
import { RoutesModel } from "../../services/models";

// Pages
import { ErrorPage404, ErrorPage404Info } from '../../pages';
import { HomePage, HomePageInfo } from '../../pages';
import { EggPage, EggPageInfo } from "../../pages";

export const RoutesData: Array<RoutesModel> = [
  {
    ...ErrorPage404Info,
    element: <ErrorPage404/>,
  },
  {
    ...HomePageInfo,
    element: <HomePage/>,
  },
  {
    ...EggPageInfo,
    element: <EggPage/>,
  }
];