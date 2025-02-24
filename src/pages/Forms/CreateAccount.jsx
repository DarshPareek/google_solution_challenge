import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-screen w-full flex bg-background'>
        <div className="lg:w-1/2 w-full bg-colour1 flex items-center max-md:px-6 max-lg:px-32 justify-center h-full">
        <form onSubmit={handleSubmit} className="lg:w-4/6 bg-white p-4 md:px-10 md:py-8 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 mb-4 outline-none border-b"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 outline-none border-b"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 outline-none border-b"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full outline-none p-2 mb-4 border-b ${password !== confirmPassword ? 'border-red-500' : ''}`}
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="mr-2"
            required
          />
          <label>I have read and agree to the terms of service and privacy policy</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Create Account</button>
        <div className="my-4 text-center">or</div>
        <button 
          onClick={() => window.location.href = 'https://your-google-login-url.com'} 
          className="w-full flex items-center gap-4 justify-center border p-2 rounded mb-2">
            <FaGoogle size={20}/>
          Sign up with Google
        </button>
        <button 
          onClick={() => window.location.href = 'https://your-facebook-login-url.com'} 
          className="w-full p-2 flex items-center justify-center border gap-4 rounded">
            <FaFacebookF size={20}/>
          Sign up with Facebook
        </button>
        <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </form>
        </div>
        <div className="w-1/2 p-16 max-lg:hidden bg-colour1 h-full">
          <img className='h-full w-full object-contain ' src="/public/Assets/images/create.png" alt="" />
        </div>
    </div>
  );
};

export default CreateAccount;
