import React from 'react'
import CardVacations from '../CardVacations'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Vacations() {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div>
            <h1 className='lg:text-3xl text-2xl font-bold text-black lg:text-white text-left'>Top Categories</h1>
            <div ref={sliderRef} className='keen-slider flex overflow-auto w-68 pb-4 space-x-0 lg:space-x-14 text-gray-500 lg:text-white space-x-4 text-center mt-2 lg:mt-6 text-2xl'>
                {[1, 1, 1, 1, 1].map((x, y) =>
                    <div className={`keen-slider__slide number-slide${y}`}>
                        <CardVacations key={y} />
                    </div>)}
            </div>
        </div>
    )
}
