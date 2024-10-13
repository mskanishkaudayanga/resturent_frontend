
"use client";

import { Card } from "flowbite-react";
import React from "react";
//import resturentImage from "../../public/r.jpeg"
const ResturentCard = ({ data }: { data: Resturant }) => {
    const {resturantName,location} = data
  return (
   
    <Card
      className="max-w-sm w-[200px]"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="../../public/r.jpeg"
    >
    
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         {resturantName}
        </h5>
   
      <div className="flex flex-col items-center justify-between">
        <p>Discription About Resturent  </p>
      </div>
      <div className="flex flex-col  justify-start ">
             <p className="text-sm font-medium">Location : {location}</p>
        </div>
    </Card>
  );
}
export default ResturentCard;
