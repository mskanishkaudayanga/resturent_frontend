import React, { useEffect } from "react"
import ResturentCard from "../Components/resturentCard"
import RestuarentService from "../services/Resturent.service"
import AddResturent from "../Components/addResturent"


const Homepage = () => {
    useEffect(() => {
        
        fletchData();
    }, [])
    const fletchData = async () => {
        const response = await RestuarentService.getResturents();
        console.log(response);
    }
    return (
        <div>
        <h1>Homepage</h1>
        <ResturentCard data={
            {
                resturantName:"KFC",
                location:"DHA"
            }
        }/> 
        
        <AddResturent/>
        </div>
    )
}
export default Homepage
