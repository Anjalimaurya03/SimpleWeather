import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
    
    const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Let's Get In !</h1>
          <p className="py-6">
            Simple Web app contains authentication , weather report and table
            manipulation .
          </p>
          <button onClick={handleLogin} className="btn bg-neutral text-white ">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
