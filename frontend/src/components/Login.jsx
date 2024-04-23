import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { setUserToken } from "../utils/setUserToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8888/auth/hackathon/api/v1/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();
    console.log(response);
    console.log(data);

    if (response.status === 200) {
      alert(`Welcome to Hackathon ${data.name}!`);
      setUserToken(data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-width-[400px] w-[400px] bg-blue-200 mx-auto flex flex-col py-16 px-10 rounded-md shadow-md">
        <h2 className="text-center font-bold text-[30px] text-blue-800">
          Log In
        </h2>
        <p className="text-center mb-10 text-[20px] font-bold">
          Welcome back !
        </p>
        <form onSubmit={handleLogin} className="flex flex-col">
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
          <p className="text-blue-700 text-[13px] -mt-2 mb-8">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
          <button className="btn" type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </form>
        <div className="mt-2 text-center">
          <span className="text-black">Not a member?</span>{" "}
          <Link to="/signup" className="text-blue-700">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
