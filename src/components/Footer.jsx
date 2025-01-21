import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
   <>
     <div className="w-full px-16 flex items-start py-16">
      <Link to="/" className="text-xl flex items-center gap-3 w-[40%] font-semibold">
        <img className="h-12" src="/public/Assets/logo.png" alt="" />
        NeuroClarity
      </Link>
      <div className=" grid gap-40 grid-cols-2">
        <div className="flex gap-2 flex-col">
            <h3 className="font-semibold mb-4 text-lg">COMPANY</h3>
            <Link className="" >About us</Link>
            <Link className="" >Reviews</Link>
            <Link className="" >Partner Program</Link>
            <Link className="" >Career</Link>
            <Link className="" >Success Stories</Link>
            <Link className="" >Pivacy Policy</Link>
            <Link className="" >Terms & Conditions</Link>
        </div>
        <div className="flex gap-2 flex-col">
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <Link className="flex items-end gap-3" ><IoMail size={22}/>somemale@gmail.com</Link>
            <Link className="flex items-end gap-3"><IoCall size={22} />91xxxxxxx</Link>

        </div>
      </div>
    </div>
    <h4 className="text-gray-600 mb-4 ml-16">@ 2025 NeuroClarity, Inc. All rights reserved.</h4>
   </>
  );
};

export default Footer;
