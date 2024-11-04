import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState)

        if(formState.password === formState.confirmPassword) {
            localStorage.setItem("email", formState.email);
            localStorage.setItem("password", formState.password);
            
            navigate("/login");
        }else{
            alert("Password does not match")
        }
    }
  return (
    <div className="container-form">
        <div className="form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" className="form-email" required placeholder="Enter Email" onChange={handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-password" required placeholder="Enter Password" minLength={5} maxLength={20} onChange={handleChange}/>

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-confirm-password" required placeholder="Confirm Password" onChange={handleChange}/>

                <input type="submit" value="Register" className="form-submit" />
            </form>
        </div>
    </div>
  );
}

export default Register;
