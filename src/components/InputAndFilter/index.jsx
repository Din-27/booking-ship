import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function InputAndFilter() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);


    return (
        <div class="font-sans antialiased bg-transparent my-4 w-full container lg:p-0 px-10">
            <div class="lg:p-2 p-3 rounded-xl shadow-md flex lg:grid lg:grid-cols-8 flex-col backdrop-filter-none lg:backdrop-blur bg-tansparent lg:bg-white/30 lg:space-x-2 space-x-0 lg:space-y-0 space-y-2">
                <div class="relative lg:col-span-4 flex-grow lg:backdrop-filter-none rounded-lg backdrop-blur lg:bg-transparent bg-white/30 ">
                    <input type="text" class="placeholder-white bg-transparent text-white pl-10 pr- py-3 w-full rounded-l-lg focus:outline-none" placeholder="Search..." />
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.386-1.414 1.415-4.387-4.386zM8 14a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="relative flex text-white lg:backdrop-filter-none rounded-lg pl-2 backdrop-blur lg:bg-transparent bg-white/30 ">
                    <div className="flex items-center pointer-events-none">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V2zM5 5v11h10V5H5zM7 7h2v2H7V7zm4 0h2v2h-2V7z" />
                        </svg>
                    </div>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        className="placeholder-white text-white bg-transparent p-3 focus:outline-none"
                        placeholderText="Check-in"
                    />
                </div>
                <div className="relative flex text-white lg:backdrop-filter-none rounded-lg pl-2 backdrop-blur lg:bg-transparent bg-white/30 ">
                    <div className="flex items-center pointer-events-none">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V2zM5 5v11h10V5H5zM7 7h2v2H7V7zm4 0h2v2h-2V7z" />
                        </svg>
                    </div>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        className="placeholder-white text-white bg-transparent p-3 focus:outline-none"
                        placeholderText="Check-out"
                    />
                </div>

                <div class="relative text-white lg:backdrop-filter-none rounded-lg backdrop-blur lg:bg-transparent rounded-lg bg-white/30 ">
                    <select class="appearance-none p-3 w-24 bg-transparent focus:outline-none">
                        <option className='text-black' value="">Guests</option>
                        <option className='text-black' value="1">1 Guest</option>
                        <option className='text-black' value="2">2 Guests</option>
                        <option className='text-black' value="3">3 Guests</option>
                        <option className='text-black' value="4">4 Guests</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.06 1.06l-4.25 4.5a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <button class="bg-blue-500 text-white px-10 py-2 rounded-full focus:outline-none bg-blue-400 text-white lg:bg-white lg:text-blue-400 font-bold">Search</button>
            </div>
        </div>
    )
}
