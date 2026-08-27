import React, { useEffect } from 'react';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './api/user.api';
import { login, logout } from './store/slice/authSlice';

const RootLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const data = await getCurrentUser();
                if (data && data.user) {
                    dispatch(login(data.user));
                }
            } catch (err) {
                dispatch(logout());
            }
        };

        checkSession();
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;
