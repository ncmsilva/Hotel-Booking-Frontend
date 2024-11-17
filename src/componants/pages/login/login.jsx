import { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../register/signup";

export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handdleLogin() {
    const loginUrl = import.meta.env.VITE_DOMAIN + import.meta.env.VITE_LOGIN
    console.log(loginUrl);
    axios
      .post(loginUrl, {
        email: email,
        password: password,
      })
      .then((rs) => {
        console.log("Login success");
        console.log(rs);
        localStorage.setItem("token", rs.data.token);
        if (rs.data.user.type == "admin") {
          window.location.href = "/admin";
        }else if (rs.data.user.type == "customer") {
        window.location.href = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="h-[100vh] w-full loginbgb flex justify-center items-center">
      <div className="relative w-[400px] h-[400px] rounded-xl backdrop-blur-md flex flex-col items-center justify-center border-[1px] border-[#00000000] hover:border-black">
        <h1 className="absolute top-[40px] text-[#8da8c3] text-3xl font-bold text-center p-[15px]">
          Login
        </h1>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[80%] bg-[#00000000] border-[2px] text-black px-[5px] h-[50px] mb-[5px]"
          defaultValue={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-[80%] bg-[#00000000] border-[2px] text-black px-[5px] h-[50px] mb-[5px]"
          defaultValue={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <div className="flex w-[78%] justify-between mt-5 ml-2 mr-2">
          <Link to="/forgot-password" className="text-black">
            Forgot Password
          </Link>
          <Link to="/signup" className="text-black">
            SignUp
          </Link>
        </div>
        <button
          className="w-[80%] w-[80%] absolute bottom-[40px] bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={handdleLogin}
        >
          Login
        </button>
      </div>
      <Routes>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/category" element={<Category />} /> */}
        </Routes>
    </div>
  );
}
