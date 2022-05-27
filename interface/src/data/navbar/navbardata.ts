import { NavBarPropsInterface } from "../../components";
import { HomePageInfo } from "../../pages";

export const NavBarProps: NavBarPropsInterface = {
  title: "Web3 Mock",
  navigations: [
    {
      label: HomePageInfo.navLabel || '',
      path: HomePageInfo.path,
      isinternal: true
    },
    {
      label: 'About',
      path: "https://houzairkoussa.herokuapp.com"
    },
    {
      label: 'Connect Wallet',
      path: "",
      isCTA: true
    }
  ]
}