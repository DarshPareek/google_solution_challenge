import React, { useState } from "react";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [city, setCity] = useState("")

  return (
    <div className="bg-background relative flex h-screen w-full">
      <Nav />
      <header className="h-full w-[19.5vw] pt-[7vw] flex flex-col items-center">
        <h1 className="text-2xl mb-7">Account Center</h1>
        <Link className="text-lg flex items-center gap-2">
          <BsPerson size={23} />
          Personal Details
        </Link>
      </header>
      <main className="flex-1 h-full pt-[9vw] pl-[6vw] ">
        <div className="flex gap-8 items-center">
          <div className="h-28 w-28 rounded-full overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/a/ACg8ocJrdLzAziKq6AQjhV_qeGroj-8Hi6r6s0RuubYKJ-U8CDTUr2g"
              alt="Profile of Dhruv Raghuvanshi"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-semibold">Dhruv Raghuvanshi</h2>
            <h4 className="text-[#6e6d6d] text-sm mt-0.5">
              SigmaBoy@gmail.com
            </h4>
          </div>
        </div>

        <div className="flex flex-col  gap-10 mt-12">
          <div className="flex gap-8">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="fullName"
                id="fullName"
                className="mt-2.5 outline-none focus:border-blue-300 border block w-[30vw] rounded-md py-2.5 px-4  sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="mt-2.5 outline-none focus:border-blue-300 border block w-[30vw] rounded-md py-2.5 px-4  sm:text-sm"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                value={contactNumber}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="contactNumber"
                id="contactNumber"
                className="mt-2.5 outline-none focus:border-blue-300 border block w-[30vw] rounded-md py-2.5 px-4   sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
              value={city}
                type="text"
                name="city"
                id="city"
                className="mt-2.5 outline-none focus:border-blue-300 border block w-[30vw] rounded-md py-2.5 px-4    sm:text-sm"
              />
            </div>
          </div>
        </div>

        <button 
          type="button" 
          aria-label="Logout" 
          className="absolute right-[12.45vw] bottom-[10vw] bg-[#d02a2a] text-white px-3 rounded-md py-1"
        >
          Logout
        </button>
      </main>
    </div>
  );
};

export default Profile;
