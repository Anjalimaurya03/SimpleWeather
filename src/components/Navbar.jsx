import React from "react";
import { UserAuth } from "../context/AuthContext";


function Navbar() {
  const {currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try{
            await logout();
        }
        catch(error){
            console.log(error)

        }
    }

  return (
    <div className="navbar bg-neutral text-neutral-content display-flex">
      <div className="containerWrap flex justify-between">
      <a className="btn btn-ghost text-xl">SimpleWeather</a>
      {currentUser ? <button onClick = {handleLogout} className="btn btn-neutral text-xl text-neutral-content ">Logout</button> : ""}

      </div>
    </div>
  );
}

export default Navbar;
