import useBreakpoint from "components/hooks/useBreakpoint";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const breakpoint = useBreakpoint();
  return (
    <div className="fixed top-0 left-0 w-full">
      {breakpoint == "sm" ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};

export default Navbar;
