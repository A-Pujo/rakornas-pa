import React from "react"
import { Box } from "@chakra-ui/react"
import heroImg from '../../images/hero.png'
import { IoLocation } from 'react-icons/io5'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from "react-router-dom"
import 'animate.css'
import './home.css'

const Home = () => {

    return(
        <>
            <Box className="max-h-screen">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Box className="flex justify-end items-center h-screen px-10 md:px-36">
                            <div>
                                <AnimationOnScroll animateIn="animate__fadeInDown">
                                    <h1 className="text-5xl text-[#6474E5]">RAKORNAS PA 2023</h1>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <h3 className="text-3xl text-[#6474E5]">Uraian singkat Rakornas</h3>
                                </AnimationOnScroll>
                            </div>
                        </Box>
                        <Box className="relative hidden md:block">
                            <svg className="absolute left-0 top-10 w-52 md:w-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#9AA4EC" d="M53.1,-53.6C68.3,-37.9,79.7,-18.9,80.9,1.2C82,21.3,72.9,42.6,57.7,55.3C42.6,67.9,21.3,72,0.2,71.8C-20.9,71.6,-41.7,67.1,-53.2,54.4C-64.7,41.7,-66.8,20.9,-64.8,2C-62.8,-16.8,-56.6,-33.6,-45.1,-49.3C-33.6,-65,-16.8,-79.6,1.1,-80.7C18.9,-81.7,37.9,-69.3,53.1,-53.6Z" transform="translate(100 100)" />
                            </svg>
                            <img className="absolute rounded-lg top-40 right-10" src={ heroImg } alt="" />
                            <svg className="absolute right-0 bottom-32 w-40"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#9AA4EC" d="M70.3,-23.1C79.6,5.8,67.7,41.3,43.4,58.8C19,76.3,-17.8,75.8,-42,58.2C-66.2,40.5,-77.8,5.7,-68.7,-22.9C-59.6,-51.5,-29.8,-73.9,0.4,-74C30.5,-74.1,61,-51.9,70.3,-23.1Z" transform="translate(100 100)" />
                            </svg>
                        </Box>
                    </div>
                </div>
            </Box>
            <Box className="bg-[#4EA1D3] relative min-h-screen text-white pb-40 md:pb-20">
                <div className="container grid md:grid-cols-2 gap-4 p-5 md:p-20 lg:p-30">
                    <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                        <div>
                            <div className="bg-white relative p-3 rounded-lg hover:p-0 ease-in duration-200">
                                <div className="absolute bottom-0 left-0 w-full h-16 rounded-tl-lg rounded-tr-lg bg-[#6474E5]">
                                    <div className="flex h-full flex-col justify-center items-center">
                                        <div className="flex flex-row items-center text-sm md:text-lg font-bold"><IoLocation/> Gedung Ex-MA Kementerian Keuangan</div>
                                    </div>
                                </div>
                                <img src="assets/imgs/acara-1.png" className="rounded-lg ease-in duration-200" alt=""/>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-xl md:text-3xl">STAKEHOLDER DAY</h2>
                                <h3 className="text-lg md:text-xl">21 Maret 2023</h3>
                            </div>
                            <div className="block md:mt-4">
                                <div className="rounded-full bg-gradient-to-r from-[#4EA1D3] to-[#6474E5] px-6 py-2 w-full md:w-fit text-center border-2 mt-2 md:inline">
                                    <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSfbtvePsgmgQ8goUddmsj6DZmwugPW8dnmxgqGtuTPHGJPEkw/viewform'} target="_blank">Daftar Batch 1</Link>
                                </div>
                                <div className="rounded-full bg-gradient-to-r from-[#4EA1D3] to-[#6474E5] px-6 py-2 w-full md:w-fit text-center border-2 mt-2 md:ml-2 md:inline">
                                    <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSfbtvePsgmgQ8goUddmsj6DZmwugPW8dnmxgqGtuTPHGJPEkw/viewform'} target="_blank">Daftar Batch 2</Link>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn" className="z-0">
                        <div>
                            <div className="grid grid-cols-3 bg-gradient-to-r from-[#F4A4A4] to-[#9AA4EC] bg-gradient-to-r from-[#F4A4A4] to-[#6474E5] rounded-lg shadow-lg h-fit">
                                <div className="col-span-1">
                                    <img src="assets/imgs/acara-1.png" className="h-full w-auto" alt=""/>
                                </div>
                                <div className="text-white col-span-2 p-3 rounded-tr-lg rounded-br-lg">
                                    <h2 className="text-xl md:text-2xl">STAKEHOLDER DAY</h2>
                                    <h3 className="text-md md:text-lg">21 Maret 2023 - 22 Maret 2023</h3>
                                    <div className="flex flex-row items-center text-sm md:text-lg"><IoLocation className="hidden md:inline"/> Gedung Ex-MA Kementerian Keuangan</div>
                                </div>
                            </div>
                            <div className="grid mt-4 grid-cols-3 bg-gradient-to-r from-[#F4A4A4] to-[#9AA4EC] bg-gradient-to-r from-[#F4A4A4] to-[#6474E5] rounded-lg shadow-lg h-fit">
                                <div className="col-span-1">
                                    <img src="assets/imgs/acara-2.png" className="h-full w-auto" alt=""/>
                                </div>
                                <div className="text-white col-span-2 p-3 rounded-tr-lg rounded-br-lg">
                                    <h2 className="text-xl md:text-2xl">COACHING CLINIC</h2>
                                    <h3 className="text-md md:text-lg">1 Mei 2023</h3>
                                    <div className="flex flex-row items-center text-sm md:text-lg"><IoLocation className="hidden md:inline"/> Gedung Ex-MA Kementerian Keuangan</div>
                                </div>
                            </div>
                            <div className="grid mt-4 grid-cols-3 bg-gradient-to-r from-[#F4A4A4] to-[#9AA4EC] bg-gradient-to-r from-[#F4A4A4] to-[#6474E5] rounded-lg shadow-lg h-fit">
                                <div className="col-span-1">
                                    <img src="assets/imgs/acara-3.png" className="h-full w-auto" alt=""/>
                                </div>
                                <div className="text-white col-span-2 p-3 rounded-tr-lg rounded-br-lg">
                                    <h2 className="text-xl md:text-2xl">MAIN EVENT RAKORNAS</h2>
                                    <h3 className="text-md md:text-lg">1 Mei 2023</h3>
                                    <div className="flex flex-row items-center text-sm md:text-lg"><IoLocation className="hidden md:inline"/> Gedung Ex-MA Kementerian Keuangan</div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="custom-shape-divider-bottom-1678592172">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </Box>
            <Box className="max-w-screen text-white py-6">
                <div className="px-6 md:px-10 pb-4 md:pb-0">
                    <blockquote className="p-12 text-2xl md:text-5xl text-center text-bold italic text-[#6474E5] mb-5">
                        "Tagline Tagline Tagline"
                    </blockquote>
                </div>
            </Box>
        </>
    )
}

export default Home