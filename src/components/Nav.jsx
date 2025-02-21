import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Nav = () => {
  const [menuAction, setMenuAction] = useState(false);

  return (
    <nav className="px-[4rem] z-10 bg-background fixed w-full py-4  flex items-center justify-between max-sm:px-4">
      <div
        className={`fixed h-screen w-full bg-background duration-300 ${
          menuAction ? "top-0" : "-top-[120%]"
        } left-0 p-4`}
      >
        <div className="flex justify-between">
          <Link to="/" className="text-xl flex items-end gap-3 font-semibold">
            <img className="h-8" src="/public/Assets/logo.png" alt="" />
            NeuroClarity
          </Link>
          <IoClose onClick={() => setMenuAction(false)} size={32} />
        </div>
        <div className="flex flex-col gap-3 mt-16 items-end px-2">
          <Link to="http://0.0.0.0:4567/" className="text-3xl">
            Online Community
          </Link>
          <Link to="/job" className="text-3xl">
            Job Search
          </Link>
          <Link to="/mentorship" className="text-3xl">
            Mentorship
          </Link>
        </div>
      </div>
      <Link to="/" className="text-xl flex items-end gap-3 font-semibold">
        <img className="h-8" src="/public/Assets/logo.png" alt="" />
        NeuroClarity
      </Link>
      <div className="flex items-center gap-12 max-lg:hidden">
        <Link to="http://0.0.0.0:4567/">Online Community</Link>
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
          <Link
            to="/login"
            className="px-5 text-md rounded-lg  w-fit py-1.5 text-colour1 font-semibold border-2 border-colour1"
          >
            Login
          </Link>
          <Link
            to="/create"
            className="px-5 text-md rounded-lg  w-fit py-2 text-white bg-colour1"
          >
            Create Account
          </Link>
        </div>
      </div>

      <div onClick={() => setMenuAction(true)} className="menu lg:hidden">
        <RiMenu3Fill size={22} />
      </div>
    </nav>
  );
};

export default Nav;
