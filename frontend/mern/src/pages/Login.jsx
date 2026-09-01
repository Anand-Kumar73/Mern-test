Login.jsx

import { useState } from "react";
import { useNavigate} from "react-router-dom";
import useNavigate from "react-router-dom";

import axios from "axios";

const Login = () => {
    const [email, setSetemail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/login", {              
                email:email,
                password:password
            });

            navigate("/Home");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setBranch(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;