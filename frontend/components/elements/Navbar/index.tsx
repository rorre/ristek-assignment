import useBreakpoint from "components/hooks/useBreakpoint";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const breakpoint = useBreakpoint();
  return breakpoint == "sm" ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
