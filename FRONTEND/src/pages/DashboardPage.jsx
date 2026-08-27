import React from "react";
import UrlForm from "../components/UrlForm";
import UserUrl from "../components/UserUrl";
import { useSelector } from "react-redux";
import { Sparkles, LayoutDashboard } from "lucide-react";

const DashboardPage = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-[#F0F0F0] text-[#121212] py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8 relative z-10">

                {/* Dashboard Header */}
                <div className="bg-[#F0C020] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-[#121212] text-white px-3 py-1 text-xs font-black uppercase tracking-widest mb-2">
                            <LayoutDashboard className="w-3.5 h-3.5" />
                            <span>CONTROL CENTER</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212]">
                            WELCOME, {user?.name || 'CREATOR'}
                        </h1>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-800 mt-1">
                            Create new short links and manage your active redirects
                        </p>
                    </div>
                </div>

                {/* URL Shortener Form */}
                <div className="w-full">
                    <UrlForm />
                </div>

                {/* User Links Table */}
                {isAuthenticated && (
                    <div className="w-full">
                        <UserUrl />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
