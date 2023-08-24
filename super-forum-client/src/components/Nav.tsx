import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
const Nav = () => {
    const {width} = useWindowDimensions();
    if (width <= 768) {
      return null;
    }
    return <nav className="navigation">Nav</nav>
};

export default Nav;