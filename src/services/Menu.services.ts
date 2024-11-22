import { Menu } from "../Type";
import axiosInstance from "./apiClient";

const MenuServices = {
    AddMenu: async (id: String,data:Menu) => {
        try {

            console.log("flechingData", data);
            const response = await axiosInstance.post(`menu/${id}/menuAdd`,data)
            console.log("response", response); 
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                console.error('An error occurred:', error.message);
            } else {
                console.error('An unknown error occurred:', error);
            }
        }
    }

}
export default MenuServices;