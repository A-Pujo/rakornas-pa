import React from "react"
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter } from "react-icons/io5"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <>
            <div className="flex flex-col justify-center items-center text-white p-4 h-52 bg-[#6474E5]">
                <div className="flex text-center">
                    <Link to={'https://www.instagram.com/djpbditpa/'} target="_blank" className="text-lg text-bold"><IoLogoInstagram/></Link>
                    <Link to={'https://www.youtube.com/@ditpa'} target="_blank" className="text-lg text-bold ml-2"><IoLogoYoutube/></Link>
                    <Link to={'https://twitter.com/ditpa_djpb'} target="_blank" className="text-lg text-bold ml-2"><IoLogoTwitter/></Link>
                </div>
                <h5 className="text-center">Dikembangkan oleh <b>Direktorat Pelaksanaan Anggaran</b></h5>
            </div>
        </>
    )
}

export default Footer