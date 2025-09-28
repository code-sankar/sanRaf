import React from 'react';
import { Home, ArrowLeft, Search, Code, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          {/* Animated 404 text */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-blue-600 opacity-20">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Code className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-extrabold text-gray-900">Page Not Found</h2>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-xl text-gray-600">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="mt-2 text-gray-500">
            Don't worry, our team of developers is on it. In the meantime, let's get you back on track.
          </p>
        </div>
        
        <div className="mt-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="pt-8">
            <p className="text-gray-500 mb-4">Still need help?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </a>
              
              <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Search className="w-4 h-4 mr-2" />
                Browse Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Fun animation */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto rotate-0 opacity-70 blur-lg filter">
                <div className="h-24 bg-blue-600 opacity-20 animate-pulse-slow rounded-lg"></div>
              </div>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-mono">// TODO: Find missing page</span>
                <br />
                <span className="font-mono">// Error 404: Page not found</span>
                <br />
                <span className="font-mono">// Redirecting to safety...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;