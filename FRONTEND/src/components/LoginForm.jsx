import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';
import { LogIn, Lock, Mail } from 'lucide-react';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(email, password);
            dispatch(login(data.user));
            navigate({ to: "/dashboard" });
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 relative">
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-[#1040C0] border-b-2 border-[#121212]" />

                <div className="text-center mt-2 mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F0C020] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] mb-3">
                        <LogIn className="w-6 h-6 text-[#121212]" />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-[#121212]">SIGN IN</h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Access your shortened links</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-[#FFEBEE] border-2 border-[#D02020] text-[#D02020] text-xs font-bold uppercase tracking-wider">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-[#121212] mb-2" htmlFor="email">
                            EMAIL ADDRESS
                        </label>
                        <div className="relative">
                            <input
                                className="w-full px-4 py-3 bg-[#F0F0F0] text-[#121212] font-medium border-2 border-[#121212] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1040C0] text-sm"
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-[#121212] mb-2" htmlFor="password">
                            PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                className="w-full px-4 py-3 bg-[#F0F0F0] text-[#121212] font-medium border-2 border-[#121212] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1040C0] text-sm"
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-bauhaus w-full bg-[#1040C0] text-white font-black text-sm uppercase tracking-widest py-3.5 px-4 border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] hover:bg-[#0c3298] transition duration-150 disabled:opacity-50 mt-4"
                    >
                        {loading ? 'SIGNING IN...' : 'SIGN IN NOW'}
                    </button>

                    <div className="text-center mt-6 pt-4 border-t-2 border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
                            DON'T HAVE AN ACCOUNT?{' '}
                            <button
                                type="button"
                                onClick={() => state(false)}
                                className="text-[#D02020] font-black hover:underline cursor-pointer ml-1"
                            >
                                CREATE ONE HERE
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;