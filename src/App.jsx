import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Func_Comp from "./components/Func_Comp";
import Class_Comp from "./components/Class_Comp";
import Header from "./components/manager-products/Header";
import Navbar from "./components/manager-products/Navbar";
import Banner from "./components/manager-products/Banner";
import ListProducts from "./components/manager-products/ListProducts";
import Footer from "./components/manager-products/Footer";
import Excersices6 from "./components/manager-products/Excersices6";
import Excersices4 from "./components/Excersices4/Excersices4";
import Excersices5 from "./components/Excersices5/Excersices5";

function App() {
  // đây là khu vực để viết code về Javascript
  return (
    <>
  {/* bai 4 */}
    {/* <Excersices4/> */}
    {/* bai 5 */}
    <Excersices5/>
    {/* bai 6 */}
     {/* <Excersices6/> */}
    </>
  );
}

export default App;
