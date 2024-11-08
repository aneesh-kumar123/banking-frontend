
import React, { useEffect, useState } from 'react';
import { handleRequest } from '../controller/handleRequest';
import { getAllusers } from '../Service/User/user';
import Table from '../sharedComponents/table/Table';


const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1); 
    const [totalUsers, setTotalUsers] = useState(0);

    const totalPages = Math.ceil(totalUsers / limit);
     
    
    const fetchUsers = async () => {
        try {
            const response = await getAllusers(limit,page);
           // console.log(`fetchUsers limit: ${limit} ${offset}`)
            if (response && response.data) {
                setUser(response.data);
                setTotalUsers(response.total); 
            }
        
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        console.log(limit);
        
        fetchUsers()
    },[limit,page])

    return (
        <div>
            <form onSubmit={(e) => handleRequest(e, username, password)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <button onClick={fetchUsers} className="btn btn-info">Get Users</button>

            
            {user.length > 0 &&  <Table data={user} setLimit={setLimit} page={page} setPage={setPage} totalPages={totalPages} />}

        </div>
    );
};

export default Login;