import { Resturant } from "../Type";
import axiosInstance from "./apiClient";

const RestuarentService = {
    getResturents: async () => {
        try {
            const response =await axiosInstance.get("/resturents/all")
            return response.data;
        } catch (error) {
            console.error('An error occurred:', error.message);
            
        }
    },
    addResturent: async (data: Resturant)=>{
        try {
            console.log("flechingData",data);
             const response =await axiosInstance.post("resturents/add",data)
            return response.data;
        } catch (error) {
            console.error('An error occurred:', error.message);
            
        }
    },
    getResturentByid :async (id: string)=>{
        try {
            const response =await axiosInstance.get(`resturents/${id}/restaurant`)
            return response.data;
        } catch (error) {
            console.error('An error occurred:', error.message);
            
        }
    }
};

export default RestuarentService;