import React from "react";
import Image from "next/image";
import { Navbar, MainImage, MainBody } from "@/components";

const page = () => {
  return (
    <div>
      <Navbar/>
      <MainImage/>
      <MainBody/>
    </div>
  );
};

export default page;
