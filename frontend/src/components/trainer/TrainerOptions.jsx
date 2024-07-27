import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TrainerWelcomePage from '../trainer/TrainerWelcomePage';
import ViewCamps from "./ViewCamps"
import BookingForm from './BookingForm';


export default function TraineeWelcomePage() {
    const [selectedOpt, setSelectedOpt] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleOptChange = (event) => {
        setSelectedOpt(event.target.value);
    };

    const renderOpt = () => {
        switch (selectedOpt) {
            case '1':
                return <TrainerWelcomePage />;
            case '2':
                return <ViewCamps />;
            case '3':
                return <BookingForm/>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <nav className="bg-blue-500 w-full py-4 fixed top-0 z-10">
                <div className="container flex flex-col items-end mx-auto">
                    <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
                </div>
            </nav>
            <div className="mt-20 flex flex-col items-center">
                <h1 className="text-xl font-semibold" style={{ color: 'black' }}>Welcome Trainer!</h1>
                <p className="mt-4" style={{ color: 'black' }}>Please select a option to start:</p>
                <select onChange={handleOptChange} className="mt-4 p-2 border rounded" style={{ color: 'black' }}>
                    <option value="" style={{ color: 'black' }}>Select a Option</option>
                    <option value="1" style={{ color: 'black' }}>Complete Profile</option>
                    <option value="2" style={{ color: 'black' }}>View Camps/Apply for Camps</option>
                    <option value="3" style={{ color: 'black' }}>Register Booking</option>
                </select>
            </div>
            <div className="mt-10 flex flex-col items-center">
                {renderOpt()}
            </div>
        </div>
    );
}
