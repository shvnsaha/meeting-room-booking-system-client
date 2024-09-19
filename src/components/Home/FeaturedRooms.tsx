// src/components/FeaturedRooms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/meeting.jpg"
import Card from '../shared/Card';
const rooms = [
    {
        id: 1,
        name: 'Conference Room A',
        capacity: '10 People',
        price: '$100',
        img: 'https://via.placeholder.com/300x200'
    },
    {
        id: 2,
        name: 'Meeting Room B',
        capacity: '15 People',
        price: '$150',
        img: 'https://via.placeholder.com/300x200'
    },
    {
        id: 3,
        name: 'Workshop Room C',
        capacity: '20 People',
        price: '$200',
        img: 'https://via.placeholder.com/300x200'
    },
];

const FeaturedRooms = () => {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <Card room={room}></Card>
                ))}
            </div>
            <Link to="/meeting-rooms" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300">
                See More
            </Link>
        </div>
    );
};

export default FeaturedRooms;
