"use client";
import Hamburger1 from "../hamburger";
import NavBar from "../navbar";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMobile(false);
      } else {
        setMobile(true);
      }
      if (!initialized) {
        setInitialized(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!initialized) {
    return null;
  } else {
    return mobile ? <Hamburger1 /> : <NavBar />;
  }
};
export default Header;
