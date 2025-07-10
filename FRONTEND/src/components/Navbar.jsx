

import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check for existing auth token on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  // Function to handle successful login (can be called from auth forms)
  const handleLoginSuccess = useCallback((userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate({ to: '/' });
  }, [navigate]);

  // Expose login success function globally so auth forms can use it
  useEffect(() => {
    window.handleNavbarLogin = handleLoginSuccess;
    return () => {
      delete window.handleNavbarLogin;
    };
  }, [handleLoginSuccess]);

  const handleLogin = () => {
    navigate({ to: '/auth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // Clear any stored tokens/session data
    localStorage.removeItem('authToken');
    navigate({ to: '/' });
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - App name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth section */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              // Logged in state
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {user?.name || 'User'}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Logged out state
              <div className="flex items-center space-x-3">
                <Link
                  to="/auth"
                  className="text-blue-600 hover:text-blue-700 font-medium transition duration-200"
                >
                  Register
                </Link>
                <button
                  onClick={handleLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;