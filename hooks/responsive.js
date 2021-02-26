import { useMediaQuery } from "react-responsive";

const screenMinWidth = {
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
};

const useScreen = breakpoint => useMediaQuery({
  minWidth: screenMinWidth[breakpoint],
});
const useSmScreen = () => useScreen("sm");
const useMdScreen = () => useScreen("md");
const useLgScreen = () => useScreen("lg");
const useXlScreen = () => useScreen("xl");

export {
  useSmScreen,
  useMdScreen,
  useLgScreen,
  useXlScreen,
};
