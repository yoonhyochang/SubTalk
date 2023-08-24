import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
const Main = () => {

const test = true;

const {width} = useWindowDimensions();
if (width <= 768) {
  return null;
}


  return <main className="content">Main</main>

   
};

export default Main;