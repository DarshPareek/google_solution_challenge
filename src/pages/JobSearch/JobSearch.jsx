import React, { useState } from 'react';

const diseases = [
  'ADHD',
  'Autism',
  'Dyslexia',
  'Depression',
  'Anxiety',
  'Other',
];

const jobList = [
  {
    id: 1,
    title: 'Clinical Psychologist',
    company: 'NeuroHealth Inc.',
    location: 'Remote',
    diseases: ['ADHD', 'Depression'],
  },
  {
    id: 2,
    title: 'Therapy Coordinator',
    company: 'Wellness Center',
    location: 'New York, NY',
    diseases: ['Autism', 'Anxiety'],
  },
  {
    id: 3,
    title: 'Behavioral Specialist',
    company: 'NeuroClarity Partners',
    location: 'Los Angeles, CA',
    diseases: ['Dyslexia', 'Anxiety', 'Depression'],
  },
  {
    id: 4,
    title: 'Speech Therapist',
    company: 'Care Speech',
    location: 'Remote',
    diseases: ['Autism', 'Dyslexia'],
  },
];

const JobSearch = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const handleDiseaseChange = (disease) => {
    if (selectedDiseases.includes(disease)) {
      setSelectedDiseases(
        selectedDiseases.filter((selectedDisease) => selectedDisease !== disease)
      );
    } else {
      setSelectedDiseases([...selectedDiseases, disease]);
    }
  };

  const filteredJobs = jobList.filter((job) =>
    selectedDiseases.length === 0
      ? true
      : selectedDiseases.some((disease) => job.diseases.includes(disease))
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Find the Best NeuroClarity Jobs
      </h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        NeuroClarity offers objective, independent research and verified user reviews.
        When our advisors match you to a software provider, we may earn a referral fee.
        Learn more.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Filter Jobs</h3>
        <div>
          <h4 className="font-medium text-gray-600 mb-3">Diseases</h4>
          <div className="flex flex-wrap gap-4">
            {diseases.map((disease) => (
              <label
                key={disease}
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedDiseases.includes(disease)}
                  onChange={() => handleDiseaseChange(disease)}
                />
                <span>{disease}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Job Results</h3>
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-4 bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-800">{job.title}</h4>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500 text-sm mb-4">{job.location}</p>
                <div className="flex flex-wrap gap-2">
                  {job.diseases.map((disease) => (
                    <span
                      key={disease}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {disease}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
