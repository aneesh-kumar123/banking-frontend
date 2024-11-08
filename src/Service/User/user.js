import axios from "axios";

export const getAllusers = async (limit,page) => {
        try {
            let token = localStorage.getItem("token");
            // console.log(headerObj);
            if(!token){
                throw new Error("unAuthorized error")
            }
            console.log("token of user",token);
            console.log(`Hello limit and page : ${limit} ${page}`)
            let res = await axios.get(`http://localhost:5000/api/v1/user?limit=${limit}&page=${page}` , {
                    headers: {
                        auth: `Bearer ${token}`,

                    }

                
            })
            // console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
        }
}