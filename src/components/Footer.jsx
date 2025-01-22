import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   <>
     <div className="w-full px-16 flex items-start py-16 max-sm:flex-col max-sm:px-4 max-sm:py-8">
      <div className="gap-3 flex-col flex w-[30%] max-sm:w-full">
      <Link to="/" className="text-xl flex items-center gap-3 font-semibold">
        <img className="h-12" src="/public/Assets/logo.png" alt="" />
        NeuroClarity
      </Link>
      <div className="flex mt-20  flex-col max-sm:mt-10">
      <div className="flex gap-2">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 mb-4 outline-none border-b" />
        <button className=" bg-blue-500 text-white px-5 py-3 h-fit rounded">Subscribe</button>
      </div>
      <p className="text-gray-600">Subscribe for more updates and notifications from NeuralClarity.</p>
      </div>
      </div>
      <div className=" grid gap-32 grid-cols-3 ml-20 max-sm:gap-10 max-sm:grid-cols-1 max-sm:mt-8 max-sm:ml-2">
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

        <div className="flex gap-3   flex-col">
            <h3 className="font-semibold mb-4 text-lg max-sm:mb-2">SOCIALS</h3>
            <Link className=" flex items-center gap-2 max-sm:text-lg text-gray-600" > <FaFacebookF size={18} /> Facebook</Link>
            <Link className=" flex items-center gap-2 max-sm:text-lg text-gray-600" > <FaInstagram size={18} /> Instagram</Link>
            <Link className=" flex items-center gap-2 max-sm:text-lg text-gray-600" > <FaXTwitter size={18} /> Twitter</Link>
            <Link className=" flex items-center gap-2 max-sm:text-lg text-gray-600" > <FaLinkedinIn size={18} /> Linkdin</Link>
            <Link className=" flex items-center gap-2 max-sm:text-lg text-gray-600" > <FaRedditAlien size={18} /> Reddit</Link>
        </div>

        <div className="flex gap-3  flex-col">
            <h3 className="font-semibold mb-4 text-lg max-sm:mb-2">Contact</h3>
            <Link className="flex items-end gap-3 text-gray-600" ><IoMail size={20}/>somemale@gmail.com</Link>
            <Link className="flex items-end gap-3 text-gray-600"><IoCall size={20} />91xxxxxxx</Link>

        </div>
      </div>
    </div>
    <div className="pb-4">
    <h4 className="text-gray-600  ml-16 max-sm:ml-6">@ 2025 NeuroClarity, Inc. All rights reserved.</h4>
    </div>
   </>
  );
};

export default Footer;
