import React from "react";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { MdOutlinePeople } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import MentorCard from "./MentorCard";
import { IoSearch } from "react-icons/io5";
import Footer from "../../components/Footer"

const Mentorship = () => {
  const [selectedSpecialization, setSelectedSpecialization] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

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
      review: { rating: 4.5, numReviews: 120 },
      image: "https://picsum.photos/id/237/300/300", // Dog (example of neurodiversity)
    },
    {
      name: "Dr. Ryan Chen",
      specialization: "Psychology",
      diseases: ["Anxiety", "Depression"],
      review: { rating: 4.8, numReviews: 80 },
      image: "https://picsum.photos/id/1005/300/300", // Person in nature
    },
    {
      name: "Dr. Sophia Patel",
      specialization: "Pediatrics",
      diseases: ["Tourette's Syndrome", "OCD"],
      review: { rating: 4.9, numReviews: 50 },
      image: "https://picsum.photos/id/1012/300/300", // Thoughtful person
    },
    {
      name: "Dr. Michael Johnson",
      specialization: "Cardiology",
      diseases: ["Hypertension", "Heart Disease"],
      review: { rating: 4.7, numReviews: 95 },
      image: "https://picsum.photos/id/1027/300/300", // Professional woman
    },
    {
      name: "Dr. Sarah Wilson",
      specialization: "Oncology",
      diseases: ["Breast Cancer", "Lung Cancer"],
      review: { rating: 4.6, numReviews: 110 },
      image: "https://picsum.photos/id/177/300/300", // Adventurous person
    },
    {
      name: "Dr. James Miller",
      specialization: "Gastroenterology",
      diseases: ["IBS", "Crohn's Disease"],
      review: { rating: 4.8, numReviews: 75 },
      image: "https://picsum.photos/id/669/300/300", // Confident professional
    },
    {
      name: "Dr. Olivia Davis",
      specialization: "Dermatology",
      diseases: ["Psoriasis", "Eczema"],
      review: { rating: 4.9, numReviews: 130 },
      image: "https://picsum.photos/id/342/300/300", // Smiling woman
    },
    {
      name: "Dr. William Brown",
      specialization: "Orthopedics",
      diseases: ["Arthritis", "Osteoporosis"],
      review: { rating: 4.7, numReviews: 85 },
      image: "https://picsum.photos/id/821/300/300", // Mature professional
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

  const filteredCardData = cardData.filter(mentor => 
    (selectedSpecialization === '' || mentor.specialization === selectedSpecialization) &&
    mentor.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="bg-background  w-full">
      <Nav />
      <div className="flex items-center  py-20 pt-36 justify-center">
        <div className=" flex flex-col max-md:px-5 items-center gap-8 justify-center">
          <h1 className=" text-4xl md:text-6xl md:text-center font-semibold">
            NeuroClarity <span>Mentorship</span>
          </h1>
          <p className="text-xl  sm:text-center text-gray-600 md:w-[62%]">
            Connect with mentors who understand and celebrate neurodiversity.
            Find guidance, support, and understanding.
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <Link
              to="/create"
              className="px-6 text-lg rounded-lg w-full text-center  md:w-fit py-2.5 text-white bg-colour1"
            >
              Find a Mentor
            </Link>

            <Link
              to="/login"
              className="px-6 text-lg rounded-lg w-full text-center  md:w-fit py-2 text-colour1 font-semibold border-2 border-colour1"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </div>
      <div className=" border-y flex max-sm:flex-col items-center justify-center py-14 gap-8 md:gap-[22vw] border-gray-300">
        {data1.map((item, index) => (
          <div
          key={index}
            className="flex
             flex-col items-center gap-1"
          >
            <h2 className="text-4xl font-light">{item.logo}</h2>
            <h3 className="text-3xl font-mono font-bold">{item.number}+</h3>
            <h4 className="text-base text-gray-500">{item.text}</h4>
          </div>
        ))}
      </div>

      <div className=" px-5 md:px-20 w-full py-10">
        <div>
        <h2 className="text-[1.8rem] font-semibold">Find Your Mentor</h2>
        <p className="text-[1.1rem] mt-1 text-gray-500">Search through our diverse community of experienced mentors</p>
        </div>
        
        <div className="flex items-center gap-3">
        <div className="flex max-md:flex-col py-10 gap-2 w-full">
          <input
            type="text"
            placeholder="Search for a mentor..."
            className="px-2 py-2 w-full border outline-none border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-2 py-2 outline-none  border border-gray-300 rounded-md"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option className="" value="">All Specialization</option>
            {specializations.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
          <button
            className="px-4 py-2 flex items-center max-md:justify-center gap-2 bg-colour1 text-white font-semibold rounded-md"
          >
          <IoSearch/>  Search
          </button>
        </div>
        </div>

        <div className=" grid   md:grid-cols-3 gap-y-10 w-full gap-6">
            {filteredCardData.map((item, index) => (
              <MentorCard key={index} name={item.name} specialization={item.specialization} diseases={item.diseases} image={item.image} reviews={item.review} />
            ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Mentorship;
