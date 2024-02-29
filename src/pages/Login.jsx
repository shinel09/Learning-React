import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  // hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/Login";

    // validation
    if (!email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }


    // Username validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }

    try {
      setLoading(true);
      //sending from data to server
        // sending form data to server
      const { data } = await axios.post(url, {
        email,
        password,
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Login successful")
        setLoading(false);
        // redirect user to login
        setTimeout(()=>{
            navigate("/")
        }, 5000)
      }else{
        toast.error("Login failed")
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
      setLoading(false);
    }
  };
console.log(showPassword);

  return (
    <div>
      <ToastContainer />
      <h1>Login Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="">
        </div>
        <div className="">
          <input
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password-input-wrapper">
          <input
            className="form-control p-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?  (<FaEye className="icon"/>) :(
             <FaEyeSlash className="icon"/>
          )}
          </span>
        </div>

        <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
           {loading ? (
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
            </button>
          ) : (
          "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;