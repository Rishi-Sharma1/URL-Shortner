import React from 'react';
import { Link } from '@tanstack/react-router';

const GeometricLogo = ({ size = 'normal' }) => {
    const shapeSize = size === 'large' ? 'h-5 w-5' : 'h-4 w-4';
    const textSize = size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl';

    return (
        <Link to="/" className="inline-flex items-center space-x-3 group cursor-pointer select-none">
            {/* Geometric Shapes Trio: Red Circle, Blue Square, Yellow Triangle */}
            <div className="flex items-center space-x-1.5 p-1 bg-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
                {/* Circle */}
                <div className={`${shapeSize} rounded-full bg-[#D02020] border border-[#121212]`} />
                {/* Square */}
                <div className={`${shapeSize} rounded-none bg-[#1040C0] border border-[#121212]`} />
                {/* Triangle */}
                <div className={`${shapeSize} rounded-none bg-[#F0C020] border border-[#121212] transform rotate-45`} />
            </div>
            <span className={`${textSize} font-black uppercase tracking-tighter text-[#121212]`}>
                SHORT<span className="text-[#D02020]">.</span>LY
            </span>
        </Link>
    );
};

export default GeometricLogo;
