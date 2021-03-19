import React from "react";
import Navbar from "../component/Navbar";
import Particles from "../component/Particles";
const index = () => {
  return (
    <div>
      <Particles />
       <Navbar></Navbar>


      <div className="absolute right-0 left-0 bottom-0 m-auto text-center  max-w-6xl top-0  max-h-72 ">
        <h1 className="font-spartan text-center text-gray-700 text-9xl font-bold uppercase">
          Cmihad
        </h1>
        <p className="font-spartan font-normal">
          Software Developer Based in Dhaka, Bangladesh
        </p>
      </div>

    </div>
  );
};

export default index;
