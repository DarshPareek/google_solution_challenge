import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
   <>
     <div className="w-full px-16 flex items-start py-16 max-sm:flex-col max-sm:px-6 max-sm:py-8">
      <Link to="/" className="text-xl flex items-center gap-3 w-[40%] font-semibold">
        <img className="h-12" src="/public/Assets/logo.png" alt="" />
        NeuroClarity
      </Link>
      <div className=" grid gap-40 grid-cols-2 max-sm:gap-10 max-sm:grid-cols-1 max-sm:mt-6">
        <div className="flex gap-2 flex-col">
            <h3 className="font-semibold mb-4 text-lg max-sm:mb-2">COMPANY</h3>
            <Link className="max-sm:text-lg text-gray-600" >About us</Link>
            <Link className="max-sm:text-lg text-gray-600" >Reviews</Link>
            <Link className="max-sm:text-lg text-gray-600" >Partner Program</Link>
            <Link className="max-sm:text-lg text-gray-600" >Career</Link>
            <Link className="max-sm:text-lg text-gray-600" >Success Stories</Link>
            <Link className="max-sm:text-lg text-gray-600" >Pivacy Policy</Link>
            <Link className="max-sm:text-lg text-gray-600" >Terms & Conditions</Link>
        </div>
        <div className="flex gap-2 flex-col">
            <h3 className="font-semibold mb-4 text-lg max-sm:mb-2">Contact</h3>
            <Link className="flex items-end gap-3 " ><IoMail size={22}/>somemale@gmail.com</Link>
            <Link className="flex items-end gap-3 "><IoCall size={22} />91xxxxxxx</Link>

        </div>
      </div>
    </div>
    <h4 className="text-gray-600 mb-4 ml-16 max-sm:ml-6">@ 2025 NeuroClarity, Inc. All rights reserved.</h4>
   </>
  );
};

export default Footer;
