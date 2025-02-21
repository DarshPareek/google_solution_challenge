import React, { useState } from 'react'
import Nav from '../../components/Nav'
import { LuBriefcase, LuSquareArrowOutUpRight } from 'react-icons/lu';
import { FaRegBuilding } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { FaRegClock } from 'react-icons/fa6';
import Footer from "../../components/Footer"

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const companies = [
    { name: 'TechCorp', location: 'New York', jobs: 15 },
    { name: 'InnovateX', location: 'London', jobs: 9 },
    { name: 'NeuroTech', location: 'Toronto', jobs: 12 },
  ];

  const statsData = [
    {
      icon: <LuBriefcase size={30} />,
      heading: "Total Jobs",
      number: 2345
    },
    {
      icon: <FaRegBuilding size={28} />,
      heading: "Companies",
      number: 847
    },
    {
      icon: <GrLocation size={30} />,
      heading: "Locations",
      number: 77
    }
  ];

  const jobCards = [
    {
      title: "Software Developer",
      company: "Inclusive Tech",
      location: {
        city: "New York",
        type: "Remote",
        salary: "$85,000 - $95,000"
      },
      posted: "2 days ago",
      tags: ["Flexible Hours", "Remote Work", "Mentorship", "Neurodiverse Team"]
    },
    {
      title: "Data Analyst",
      company: "Diverse Insights",
      location: {
        city: "London",
        type: "Hybrid",
        salary: "£45,000 - £55,000"
      },
      posted: "5 days ago",
      tags: ["Flexible Schedule", "Training Provided", "Inclusive Culture", "Career Growth"]
    },
    {
      title: "UX Designer",
      company: "Accessible Solutions",
      location: {
        city: "Toronto",
        type: "On-site",
        salary: "$75,000 - $85,000"
      },
      posted: "1 week ago",
      tags: ["Accessibility Focus", "Team Collaboration", "Creative Freedom", "Inclusive Design"]
    }
  ];

  const filteredJobs = jobCards.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter ? job.location.city === locationFilter : true;
    const matchesType = typeFilter ? job.location.type === typeFilter : true;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className='bg-background w-full'>
      <Nav/>
      <div className="flex items-center md:px-14 px-4 py-20 pt-36 justify-start">
        <div className=" flex flex-col items-start gap-4 md:justify-center">
          <h1 className="text-5xl font-semibold">
          Find Your Next <span>Career Opportunity</span>
          </h1>
          <p className="text-xl md:text-center text-gray-600 ">
          Discover inclusive workplaces that celebrate neurodiversity
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col w-full px-4 gap-2 md:px-14 mt-6">
        <input
          type="text"
          placeholder="Search jobs by title or keywords..."
          className="px-5 py-2 w-full border border-gray-300 rounded-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-5 py-2 border border-gray-300 rounded-md outline-none"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          <option>New York</option>
          <option>London</option>
          <option>Toronto</option>
          <option>Sydney</option>
        </select>
        <select
          className="px-5 py-2 border border-gray-300 rounded-md outline-none"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>
        <button 
          className="px-5 py-2 bg-colour1 text-white rounded-md hover:bg-blue-600 transition-colors whitespace-nowrap"
          onClick={() => {
            setSearchTerm('');
            setLocationFilter('');
            setTypeFilter('');
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 px-4 md:px-14 py-16">
        {statsData.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg gap-4 flex items-center border-gray-300">
          {item.icon}
          <div className="">
            <h6 className='text-zinc-600'>{item.heading}</h6>
            <h5 className='text-3xl font-semibold leading-6'>{item.number}</h5>
          </div>
        </div>
        ))}
      </div>
        
      <div className="space-y-6 px-4 md:px-14 mb-12">
        <h1 className='text-3xl font-semibold'>Latest Jobs</h1>
        {
          filteredJobs.map((item, index) => (
            <div key={index} className="border rounded-lg px-6 py-3 border-gray-300">
            <div className="border-b py-3 flex gap-4 border-gray-300">
              <div className="h-12 w-12 rounded-full bg-gray-300">
              </div>
              <div className='space-y-0.5' >
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p>{item.company}</p>
                <div className="flex flex-wrap text-zinc-600 items-center gap-2">
                  <p className='flex text-sm items-center gap-1'>
                    <GrLocation/>
                    {item.location.type}
                  </p>
                  <p className='flex text-sm items-center gap-1'>
                  <FaRegClock />
                    {item.location.city}
                  </p>
                  <p className='flex text-sm items-center gap-1'>
                  <LuBriefcase />
                    {item.location.salary}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3 space-y-3">
              <div className="flex items-center flex-wrap gap-2 ">
                {item.tags.map((item, index) => (
                  <div key={index} className="bg-black/10 text-sm font-semibold px-2 rounded-full">{item}</div>
                ))}               
              </div>
              <div className=" flex justify-between items-center ">
                <p className='text-md text-zinc-600'>{item.posted}</p>
                <LuSquareArrowOutUpRight size={20} />
              </div>
            </div>
          </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default JobSearch