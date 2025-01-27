import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-screen w-full flex bg-background'>
    
      <div className="w-1/2 p-16 bg-background h-full">
        <img className='h-full w-full object-contain ' src="/public/Assets/images/login.png" alt="" />
      </div>

      <div className="w-1/2 bg-background flex items-center justify-center h-full">
        <form onSubmit={handleSubmit} className="w-4/6 bg-white px-10 py-8 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full p-2 mb-4 outline-none border-b" 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 mb-4 outline-none border-b" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
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
          <p className="mt-4 text-center">Don't have an account? <Link to="/create" className="text-blue-500">Create Account</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm