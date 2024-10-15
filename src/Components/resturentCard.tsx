
"use client";

import { Card } from "flowbite-react";
import React from "react";
import { Resturant } from "../Type/index.d";
//import resturentImage from "../../public/r.jpeg"
const ResturentCard = ({ data }: { data: Resturant }) => {
    const {restaurantName,city} = data
  return (
   
    <Card
      className="max-w-sm w-[200px]"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="../../public/r.jpeg"
    >
    
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         {restaurantName}
        </h5>
      <div className="flex flex-col  justify-start ">
             <p className="text-sm font-medium">Location : {city}</p>
        </div>
    </Card>
  );
}
export default ResturentCard;
