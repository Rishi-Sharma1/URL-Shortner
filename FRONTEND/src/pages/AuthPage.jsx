import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className="min-h-screen bg-[#F0F0F0] text-[#121212] flex flex-col items-center justify-center p-4 py-12 relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="w-full relative z-10">
                {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
            </div>
        </div>
    );
};

export default AuthPage;