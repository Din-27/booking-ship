import React from 'react'
import InputAndFilter from '../InputAndFilter'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Category from '../Category'
import Vacations from '../Vacations'

const images = [
    'https://img.freepik.com/free-photo/landscape-wajag-island-surrounded-by-sea-cloudy-sky-indonesia_181624-39477.jpg?w=996&t=st=1717945644~exp=1717946244~hmac=02132821b515b56aa4f60aeebfc22f2e2847402b1915a4712dcd2a39926ab7f1',
    'https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=996&t=st=1717946612~exp=1717947212~hmac=4420c7b77cd806c367562998c928b3710303cb320b43df13bc4d45ad025b0181',
    'https://img.freepik.com/free-photo/landscape-wajag-island-surrounded-by-sea-cloudy-sky-indonesia_181624-39477.jpg?w=996&t=st=1717945644~exp=1717946244~hmac=02132821b515b56aa4f60aeebfc22f2e2847402b1915a4712dcd2a39926ab7f1',
    'https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=996&t=st=1717946612~exp=1717947212~hmac=4420c7b77cd806c367562998c928b3710303cb320b43df13bc4d45ad025b0181',
]

export default function Banner() {
    // const [opacities, setOpacities] = React.useState([])

    const [sliderRef] = useKeenSlider({
        slides: images.length,
        loop: true,
        mode: 'free',
        drag: false
        // detailsChanged(s) {
        //     const new_opacities = s.track.details.slides.map((slide) => slide.portion)
        //     setOpacities(new_opacities)
        // },
    }, [
        (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 4000)
            }
            slider.on("created", () => {
                // slider.container.addEventListener("mouseover", () => {
                //     mouseOver = true
                //     clearNextTimeout()
                // })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ])
    return <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
            <div id="home" key={idx} className={`keen-slider__slide lg:h-[90vh] h-[56vh] number-slide${idx} h-screen bg-cover bg-center bg-gradient-to-t`}
                style={{
                    // opacity: opacities[idx],
                    backgroundImage: `url(${src})`
                }}>
            </div>
        ))
        }
        <div className="absolute inset-0 lg:h-[90vh] h-[56vh]  bg-black opacity-70"></div>
        <div className="absolute inset-x-0 lg:bottom-0 bottom-[125px] lg:h-32 h-8 bg-gradient-to-t from-white from-35% "></div>
        <div className="sticky w-full h-full lg:inset-x-14 inset-x-0">
            <div className="text-left text-white mt-24 lg:mx-24 mx-12">
                <h1 className="lg:text-5xl text-2xl font-bold">Welcome to Our Website</h1>
                <p className="lg:mt-4 mt-1 text-xl">We are glad to have you here.</p>
            </div>
            <div className="mx-0 lg:mx-24">
                <InputAndFilter />
            </div>
            <div className="ml-12 pr-2 mt-12 lg:mt-0 lg:mx-24">
                <Category />
            </div>
            {/* <div className="ml-12 pr-2 mt-12 lg:mt-0 lg:mx-24"> */}
            <Vacations />
            {/* </div> */}
        </div>
    </div>

}
