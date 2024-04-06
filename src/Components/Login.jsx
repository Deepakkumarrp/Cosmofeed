import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [realID, setReadID] = useState({
        email: "deepakkumarrp@gmail.com",
        password: "1234"
    })
    const [config, setConfig] = useState({
        email: "",
        password: ""
    })
    function handleOnSubmit(e){
        e.preventDefault();
        console.log(config);
        if(config.email !== realID.email){
            return alert("Email not found.");
        }else if(config.password !== realID.password){
            return alert("Wrong password.")
        }else{
            alert("You're logged in.")
            localStorage.setItem("isLogin",true);
            navigate("/");
        }
    }
    function handleOnChange(e){
        const {name, value} = e.target;
        setConfig({
            ...config,
            [name] : value
        })
    }
  return (
    <div>
        <h2>Login</h2>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="email">
                Email: <input type="text" name="email" id="email" value={config.email} onChange={handleOnChange}/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" name="password" id="password" value={config.password} onChange={handleOnChange} />
            </label>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login