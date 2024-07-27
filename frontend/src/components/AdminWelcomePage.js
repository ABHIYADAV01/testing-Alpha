// AdminWelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminWelcomePage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">Welcome Admin</h1>
            <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Logout
            </button>
        </div>
    );
}



