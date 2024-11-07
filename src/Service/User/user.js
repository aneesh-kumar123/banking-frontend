import axios from "axios";

export const getAllusers = async () => {
        try {
            let token = localStorage.getItem("token");
            // console.log(headerObj);
            if(!token){
                throw new Error("unAuthorized error")
            }
            console.log("token of user",token);
            let res = await axios.get("http://localhost:5000/api/v1/user" , {
                    headers: {
                        auth: `Bearer ${token}`,
                    }
                
            })
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
}