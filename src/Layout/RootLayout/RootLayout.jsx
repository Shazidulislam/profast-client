import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Boundary from "../../Component/Boundary/Boundary";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function RootLayout() {
  const [them, setThem] = useState(false);

  const constHandleThem = () => {
    setThem(!them);
  };
  console.log(them);
  return (
    <div className={`${them ? "them1" : "them2"}  min-h-screen`}>
      <Navbar></Navbar>
      <button onClick={constHandleThem} className="btn">
        {them ? <MdLightMode size={24}/>  : <MdNightlight  size={24}/>}
      </button>
      <Boundary>
        <Outlet></Outlet>
      </Boundary>
      <Boundary>
        <Footer></Footer>
      </Boundary>
    </div>
  );
}
