import { LoginData } from "../Type";
import axiosInstance from "./apiClient";

const authServices={
    login:async(LoginData:LoginData)=>{
        try {
                console.log("responce");
            const responce = await axiosInstance.post("/auth/login")
            console.log("responce");
            return responce.data;
            
        } catch (error) {
            if (error instanceof Error) {
                console.error('An error occurred:', error.message);
            } else {
                console.error('An unknown error occurred');
            }
        }
    }
}
export default authServices;
