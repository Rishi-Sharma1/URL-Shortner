import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';
import GeometricLogo from './GeometricLogo';

const Navbar = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            dispatch(logout());
            navigate({ to: '/auth' });
        }
    };

    return (
        <nav className="bg-[#F0F0F0] border-b-4 border-[#121212] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Left side - Brand Logo */}
                    <div className="flex items-center space-x-6">
                        <GeometricLogo />
                        {isAuthenticated && (
                            <Link
                                to="/dashboard"
                                className="hidden sm:inline-block text-[#121212] font-bold text-sm uppercase tracking-wider px-3 py-1 border-2 border-transparent hover:border-[#121212] hover:bg-[#F0C020] transition duration-150"
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* Right side - User info & Action buttons */}
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-3">
                                <div className="hidden sm:flex items-center space-x-2 bg-white px-3 py-1.5 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
                                    <div className="w-3 h-3 rounded-full bg-[#1040C0]" />
                                    <span className="text-xs font-black uppercase tracking-wider text-[#121212]">
                                        {user?.name || 'USER'}
                                    </span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="btn-bauhaus bg-[#D02020] text-white font-bold text-xs uppercase tracking-widest px-4 py-2 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                                >
                                    LOGOUT
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/auth"
                                    className="btn-bauhaus bg-[#F0C020] text-[#121212] font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212]"
                                >
                                    SIGN IN
                                </Link>
                                <Link
                                    to="/auth"
                                    className="hidden sm:inline-block btn-bauhaus bg-[#1040C0] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212]"
                                >
                                    GET STARTED
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;