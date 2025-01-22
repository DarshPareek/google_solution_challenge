import React from "react";
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiUserCommunityLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import Footer from "../../components/Footer";

const Home = () => {
  const cardData = [
    {
      icon: <RiUserCommunityLine size={24} />,
      heading: "Online Support Community",
      detail: "Connect with others who understand what you're going through",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaPersonChalkboard size={24} />,
      heading: "Mentorship Program",
      detail: "Find or become a mentor to help navigate life's challenges",
      image: "/public/Assets/images/image1.jpg",
    },
    {
      icon: <BsPersonVideo3 size={24} />,
      heading: "Live Assistance",
      detail: "Get instant support from our team to overcome life's obstacles",
      image:
        "https://images.unsplash.com/photo-1598257006675-0aaec40301f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const reviewData = [
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Emily J.",
      username: "@emilyj",
      review:
        "NeuroClarity has been a game-changer for my mental health journey.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "David K.",
      username: "@davidk",
      review:
        "The community support has helped me feel less alone in my struggles.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah T.",
      username: "@saraht",
      review:
        "NeuroClarity's resources have empowered me to take control of my life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael B.",
      username: "@michaelb",
      review:
        "The mentorship program has connected me with like-minded individuals.",
    },
  ];

  const personalizedTools = [
    {
      // icon: <FaTools size={24} />,
      heading: "Personalized Tools",
      detail: "Access tailored resources for your unique needs",
      image: "https://img.freepik.com/free-vector/website-setup-concept-landing-page_23-2148309689.jpg?t=st=1737448386~exp=1737451986~hmac=9ab469c297e641b331fa9b59e3dfd974ce4a94512a70e25a58efdc4b19a9ceb9&w=1060",
    },
    {
      // icon: <FaGraduationCap size={24} />,
      heading: "Education Support",
      detail: "Unlock educational opportunities for a brighter future",
      image: "https://img.freepik.com/free-vector/gradient-international-day-education-illustration_23-2150011975.jpg?t=st=1737448699~exp=1737452299~hmac=9866309a8035cd3259ba93c224192db6a15d77556261058124c6de202dfe5feb&w=1060",
    },
    {
      // icon: <FaBriefcase size={24} />,
      heading: "Employment Opportunities",
      detail: "Explore job openings and career development resources",
      image: "https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?t=st=1737448747~exp=1737452347~hmac=3732071bf35717c715c8d1eca36808978f04c1728dbd20d3d9e35c22f5525cd6&w=1380",
    },
    {
      // icon: <FaHome size={24} />,
      heading: "Daily Life Assistance",
      detail: "Find support for daily challenges and tasks",
      image: "https://img.freepik.com/free-vector/set-people-cleaning-their-home-illustrated_23-2148260676.jpg?t=st=1737448822~exp=1737452422~hmac=e63a88091c73024046356f3cd604c19f41d837c3215c443b15cb9063f7093fcd&w=1060",
    },
    {
      // icon: <FaUsers size={24} />,
      heading: "Community Building",
      detail: "Connect with others who share your experiences",
      image: "https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?t=st=1737448882~exp=1737452482~hmac=930763f6217c72d07e649878a3012ca0e94c567191d13f34d9227eaa702e24c1&w=1060",
    },
    {
      // icon: <FaBullhorn size={24} />,
      heading: "Promoting Awareness",
      detail: "Join the movement to raise awareness and promote inclusivity",
      image: "https://img.freepik.com/free-vector/public-relations-concept-illustrated_23-2148904290.jpg?t=st=1737448928~exp=1737452528~hmac=b8f43e36ab8febcf095fbf71f5969edd59385da298c0a1cb26158592f56ba1fb&w=1060",
    },
  ];
  
  return (
    <div className=" w-full bg-background">
      <Nav />
      <div className="h-full bg-[#e6f5f1] flex justify-between  w-full px-[4rem] pb-[5vw] pt-[10vw] max-sm:pt-20 max-sm:px-4 max-sm:pb-10">
        <div className=" w-1/2 mt-[4vw] max-sm:w-full">
        <h1 className="text-[4vw] font-semibold w-full leading-[4.5vw] max-sm:text-3xl ">
          Empowering Neurodiverse Minds with Technology and Care
        </h1>

        <p className="w-[60%] text-lg mt-4 max-sm:w-[80%]">
          Transforming lives through innovative solutions for autism, ADHD,
          dyslexia, and more.
        </p>

        <Button text={"Join us"} />
        </div>

        <div className=" h-1/2 max-sm:hidden">
          <img className=" h-[35vw] object-contain" src="/public/Assets/images/home.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col py-10 items-center mt-[2vw] max-sm:px-4">
        <h1 className="text-[3vw] text-center font-semibold w-[50%] max-sm:w-full max-sm:text-2xl">
          Join Our Trusted{" "}
          <span className="text-colour1">Neurodiverse Community</span>
        </h1>
        <div className="mt-[6vw]  flex items-center gap-[4vw] max-sm:flex-col max-sm:mt-14 max-sm:gap-6">
          {cardData.map((item, key) => (
            <div
              key={key}
              className="px-5 py-6 border overflow-hidden relative h-48 rounded-lg border-gray-300  w-80"
            >
              <div className=" opacity-0 hover:opacity-100  duration-300 absolute  left-0 top-0 h-full w-full">
                <img
                  loading="lazy"
                  className="h-full rounded-md w-full object-cover hover:scale-105 duration-300 "
                  src={item.image}
                  alt=""
                />
              </div>
              {item.icon}
              <h2 className="text-lg font-semibold mt-6">{item.heading}</h2>
              <p className="text-gray-600 mt-1.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col py-10 items-center mt-[5vw] max-sm:px-4">
        <h1 className="text-[3vw] text-center font-semibold w-[50%] max-sm:w-full max-sm:text-2xl">
          NeuroClarity is for{" "}
          <span className="text-colour1">Transforming Lives</span>
        </h1>

        <div className="review mt-[6vw] overflow-hidden flex items-center gap-[2vw] max-sm:flex-col max-sm:mt-20 max-sm:gap-6">
          {reviewData.map((item, index) => (
            <div
              key={index}
              className="px-5 py-5 border overflow-hidden relative h-48 rounded-lg border-gray-300  w-80"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="h-12 rounded-full overflow-hidden w-12">
                    <img
                      loading="lazy"
                      className=" w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <h4 className="text-xs text-gray-600">{item.username}</h4>
                  </div>
                </div>
                <BsTwitterX size={20} />
              </div>

              <p className="mt-6">{item.review}</p>
            </div>
          ))}
        </div>

        <h2 className="text-[2vw] text-center font-semibold mt-[5vw] max-sm:mt-10 max-sm:text-2xl">
          Connect, Learn, and Grow Today!
        </h2>
        <Button text={"Join Now"} />
      </div>

      <div className="flex flex-col bg-[#e6f5f1] py-20 items-center mt-[5vw] max-sm:px-4">
        <h1 className="text-[3vw] text-center font-semibold w-[50%] max-sm:text-2xl max-sm:w-full">
          Everything your mind needs to{" "}
          <span className="text-colour1">Unlock your Full Potential</span>
        </h1>

      <div className="grid grid-cols-3  gap-16 mt-20 max-sm:grid-cols-1 max-sm:gap-10">
          {personalizedTools.map((item, index) => (
            <div key={index} className="px-5  py-5 border overflow-hidden relative h-[25rem] rounded-lg border-gray-300  w-96 max-sm:w-full">
                <div className=" w-full overflow-hidden rounded-md h-[60%]">
                  <img className="h-full w-full object-cover" src={item.image} alt="" />
                </div>
                <div className=" text-center mt-4">
                  <h2 className="font-semibold text-xl">{item.heading}</h2>
                  <p className="mt-4 text-lg text-gray-600">{item.detail}</p>
                </div>
            </div>
          ))}
      </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
