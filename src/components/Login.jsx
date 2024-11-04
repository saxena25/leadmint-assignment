import "./Login.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({
      email: "",
      password: "",
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      let userEmail = localStorage.getItem("email");
      let userPassword = localStorage.getItem("password");

      if(userEmail === loginState.email && userPassword === loginState.password) {
        navigate("/dashboard");
      }else{
        alert("Email or Password is incorrect")
      }
    }


  return (
    <div>
      <div className="container-login">
        <div className="form-login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login">
                <label htmlFor="email" className="email-label">Email Address</label>
                <input type="email" name="email" className="login-email" required placeholder="Enter Email" onChange={handleChange} />

                <label htmlFor="password" className="password-label">Password</label>
                <input type="password" name="password" className="login-password" required placeholder="Enter Password" minLength={5} maxLength={20} onChange={handleChange}/>

                <input type="submit" value="Register" className="login-submit" />
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
