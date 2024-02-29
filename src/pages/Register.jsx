import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  // hooks
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/register";

    // validation
    if (!username || !email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }

    // Username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
      return toast.error("username must be 3 characters and above");
    }

    // Username validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }

    try {
      setLoading(true);
        // sending form data to server
      const { data } = await axios.post(url, {
        username,
        email,
        password,
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Registration successful")
        setLoading(false);
        // redirect user to login
        setTimeout(()=>{
            navigate("/login")
        }, 5000)
      }else{
        toast.error("Registration failed")
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
      setLoading(false);
    }
  };

  console.log(username);
  return (
    <div>
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
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
          "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;