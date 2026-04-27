import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaDropbox, FaGoogle, FaSlack } from 'react-icons/fa';
import { SiCoinbase } from 'react-icons/si';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };


  return (
    <div className="min-h-screen flex w-full font-sans">
      {/* Left Side - Dark Section */}
      <div className="hidden lg:flex flex-col w-1/2 bg-black text-white relative overflow-hidden py-16 px-12 items-center">
        {/* Background Patterns */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-lg mt-10">
          <h1 className="text-4xl md:text-5xl font-medium text-center leading-tight mb-4">
            Start closing more revenue<br />with LinkLy
          </h1>
          <p className="text-gray-400 text-center text-sm md:text-base mb-12">
            Join LinkLy now to expand your revenue for future!
          </p>
          
          {/* Dashboard Image */}
          <img 
            src="/dashboard-mockup.svg" 
            alt="LinkLy Dashboard Mockup" 
            className="w-full max-w-md rounded-xl shadow-2xl mb-20 transform transition-transform hover:scale-105"
          />
        </div>
        
        {/* Logos at bottom */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-gray-400 opacity-60">
          <div className="flex items-center gap-2"><SiCoinbase size={24} /><span className="text-xl font-semibold tracking-tight">coinbase</span></div>
          <div className="flex items-center gap-2"><FaDropbox size={24} /><span className="text-xl font-semibold tracking-tight">Dropbox</span></div>
          <div className="flex items-center gap-2"><FaGoogle size={20} /><span className="text-xl font-semibold tracking-tight">Google</span></div>
          <div className="flex items-center gap-2"><FaSlack size={24} /><span className="text-xl font-semibold tracking-tight">slack</span></div>
        </div>
      </div>

      {/* Right Side - Light Section */}
      <div className="w-full lg:w-1/2 bg-[#fafafa] flex flex-col justify-center items-center px-6 py-12 relative">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-8">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="8" fill="#0a0a0a"/>
                <path d="M12 16C12 16 10 18 8 18C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C10 10 12 12 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12C16 12 18 10 20 10C22.2091 10 24 11.7909 24 14C24 16.2091 22.2091 18 20 18C18 18 16 16 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14H18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">LinkLy</span>
            </Link>
            <h2 className="text-3xl font-medium text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-500 text-sm">Please Create an Account to Continue</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5 text-left">
                  First Name
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors bg-white text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5 text-left">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors bg-white text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 text-left">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors bg-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5 text-left">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors bg-white text-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5 text-left">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors bg-white text-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-500 cursor-pointer">
                I accept the <span className="font-semibold text-gray-900">Terms of Service</span> and <span className="font-semibold text-gray-900">Privacy Policy</span>
              </label>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
              >
                Sign Up
              </button>

              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-200"
              >
                <FcGoogle size={20} />
                Sign Up with Google
              </button>
            </div>
          </form>

          {/* Footer Text */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-gray-900 hover:text-black transition-colors">
              Sign In
            </Link>
          </p>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 text-center w-full text-xs text-gray-400">
          ©2023 LinkLy. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
