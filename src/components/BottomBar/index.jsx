import { IconBuildingSkyscraper, IconHome, IconLuggage, IconShip, IconSpeedboat } from '@tabler/icons-react';
import React from 'react'

export default function BottomBar() {
    return (
        <footer className="lg:hidden block fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
            <div className="flex justify-between">
                <button className="focus:outline-none">
                    <IconHome />
                </button>
                <button className="focus:outline-none">
                    <IconLuggage />
                </button>
                <button className="focus:outline-none">
                    <IconBuildingSkyscraper />
                </button>
                <button className="focus:outline-none">
                    <IconShip />
                </button>
                <button className="focus:outline-none">
                    <IconSpeedboat />
                </button>
            </div>
        </footer>
    );
};
