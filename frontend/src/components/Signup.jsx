import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { setUserToken } from "../utils/setUserToken";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8888/auth/hackathon/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
      alert(`Welcome to Hackathon ${data.name}!`);
      setUserToken(data.accessToken);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-width-[400px] w-[400px] bg-blue-200 mx-auto flex flex-col py-14 px-10 rounded-md shadow-md">
        <h2 className="text-center mb-1 font-bold text-[30px] text-blue-800">
          Sign Up
        </h2>
        <h3 className="text-blue-700 font-bold text-[20px] text-center mb-8">
          Create new account !
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="px-3 py-3 rounded-md mb-5 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-3 rounded-md mb-5 text-black"
          />
          <div className="w-full flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-3 rounded-md mb-5 text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 text-[22px] absolute right-3 top-3"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <button className="btn" type="submit">
            SignUp
          </button>
        </form>
        <div className="mt-2 text-center">
          <span className="text-black">Allready have an account?</span>{" "}
          <Link to="/login" className="text-blue-700">
            LogIn
          </Link>
        </div>

        <div className="flex my-5 items-center">
          <div className="w-full h-[1px] bg-black"></div>
          <span className="text-black font-200 mx-2">or</span>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        <div className="btn-google flex justify-center items-center">
          <span className="text-[25px] mr-2">
            <FcGoogle />
          </span>
          <p className="text-black">SignUp with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
