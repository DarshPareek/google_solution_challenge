import React from "react";
import { Link } from "react-router-dom";
import { RiNotificationFill } from "react-icons/ri";
import Button from "./Button";
const Nav = () => {
  return (
    <nav className="px-[4rem] z-10 bg-background fixed w-full py-4  flex items-center justify-between">
      <Link to='/' className="text-xl flex items-end gap-3 font-semibold">
      <img className="h-8" src="/public/Assets/logo.png" alt="" />
      NeuroClarity</Link>
      <div className="flex items-center gap-12">
        <Link to="/community">Online Community</Link>
        <Link to="/job">Job Search</Link>
        <Link to="/mentorship">Mentorship</Link>
        {/* <div className="flex items-center gap-10 ml-[4vw]">
          <Link
            to="/notification"
            className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden"
          >
            <RiNotificationFill size={21} />
          </Link>
          <Link
            to="/profile"
            className="h-8 w-8 rounded-full overflow-hidden "
          >
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/a/ACg8ocJrdLzAziKq6AQjhV_qeGroj-8Hi6r6s0RuubYKJ-U8CDTUr2g"
              alt=""
            />
          </Link>
        </div> */}
        <div className="flex items-center justify-center gap-3 ml-[4vw]">
          <Link to="/login" className="px-5 text-md rounded-lg  w-fit py-1.5 text-colour1 font-semibold border-2 border-colour1">Login</Link>
          <Link to="/create" className="px-5 text-md rounded-lg  w-fit py-2 text-white bg-colour1">Create Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
