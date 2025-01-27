import React from "react";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { MdOutlinePeople } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import MentorCard from "./MentorCard";
import { IoSearch } from "react-icons/io5";

const Mentorship = () => {
  const data1 = [
    { logo: <MdOutlinePeople />, text: "Active Mentors", number: 500 },
    { logo: <LuBrain />, text: "Specializations", number: 15 },
    { logo: <LuStar />, text: "Successful Matches", number: 2000 },
  ];

  const cardData = [
    {
      name: "Dr. Emma Taylor",
      specialization: "Neurology",
      diseases: ["Autism", "ADHD"],
      review: {
        rating: 4.5,
        numReviews: 120,
      },
      image: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder image
    },
    {
      name: "Dr. Ryan Chen",
      specialization: "Psychology",
      diseases: ["Anxiety", "Depression"],
      review: {
        rating: 4.8,
        numReviews: 80,
      },
      image: "https://randomuser.me/api/portraits/men/2.jpg", // Placeholder image
    },
    {
      name: "Dr. Sophia Patel",
      specialization: "Pediatrics",
      diseases: ["Tourette's Syndrome", "OCD"],
      review: {
        rating: 4.9,
        numReviews: 50,
      },
      image: "https://randomuser.me/api/portraits/women/3.jpg", // Placeholder image
    },
  ];

  const specializations = [
    "Neurology",
    "Psychology",
    "Pediatrics",
    "Cardiology",
    "Oncology",
    "Gastroenterology",
    "Dermatology",
    "Orthopedics",
    "Ophthalmology",
    "Urology",
  ];

  const specializationCards = specializations.map((specialization, index) => (
    <div key={index} className="flex flex-col items-center gap-2">
      <h3 className="text-lg font-semibold">{specialization}</h3>
      <p className="text-gray-500">Explore mentors with expertise in {specialization}.</p>
    </div>
  ));

  return (
    <div className="bg-background  w-full">
      <Nav />
      <div className="flex items-center  py-20 pt-36 justify-center">
        <div className=" flex flex-col items-center gap-8 justify-center">
          <h1 className="text-6xl font-semibold">
            NeuroClarity <span>Mentorship</span>
          </h1>
          <p className="text-xl text-center text-gray-600 w-[62%]">
            Connect with mentors who understand and celebrate neurodiversity.
            Find guidance, support, and understanding.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/create"
              className="px-6 text-lg rounded-lg  w-fit py-2.5 text-white bg-colour1"
            >
              Find a Mentor
            </Link>

            <Link
              to="/login"
              className="px-6 text-lg rounded-lg  w-fit py-2 text-colour1 font-semibold border-2 border-colour1"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </div>
      <div className=" border-y flex items-center justify-center py-14 gap-[22vw] border-gray-300">
        {data1.map((item, index) => (
          <div
          key={index}
            className="flex
             flex-col items-center gap-1"
          >
            <h2 className="text-4xl font-light">{item.logo}</h2>
            <h3 className="text-3xl font-mono font-semibold">{item.number}+</h3>
            <h4 className="text-gray-500">{item.text}</h4>
          </div>
        ))}
      </div>

      <div className="px-20 w-full py-10">
        <div>
        <h2 className="text-[1.8rem] font-semibold">Find Your Mentor</h2>
        <p className="text-[1.1rem] mt-1 text-gray-500">Search through our diverse community of experienced mentors</p>
        </div>
        
        <div className="flex items-center gap-3">
        <div className="flex py-10 gap-2 w-full">
          <input
            type="text"
            placeholder="Search for a mentor..."
            className="px-2 py-2 w-full border outline-none border-gray-300 rounded-md"
          />
          <select
            className="px-2 py-2 outline-none  border border-gray-300 rounded-md"
          >
            <option className="" value="">All Specialization</option>
            {specializations.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
          <button
            className="px-4 py-2 flex items-center gap-2 bg-colour1 text-white font-semibold rounded-md"
          >
          <IoSearch/>  Search
          </button>
        </div>
        </div>

        <div className=" grid  grid-cols-3 w-full gap-6">
            {cardData.map((item, index) => (
              <MentorCard key={index} name={item.name} specialization={item.specialization} diseases={item.diseases} image={item.image} reviews={item.review} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
