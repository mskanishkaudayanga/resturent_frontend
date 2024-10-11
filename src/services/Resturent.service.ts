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
    addResturent: async ()=>{
        try {
             const response =await axiosInstance.post("resturents/add")
            return response.data;
        } catch (error) {
            console.error('An error occurred:', error.message);
            
        }
    }
};

export default RestuarentService;