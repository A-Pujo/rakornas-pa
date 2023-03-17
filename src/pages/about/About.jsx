import React from "react"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css'

const About = () => {
    return(
        <>
            <div className="container py-10 md:pb-24 bg-white">
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                    <h1 className="text-5xl text-center text-[#6474E5] my-10 md:my-20">RAKORNAS PA 2023</h1>
                </AnimationOnScroll>
                <div className="text-[#6474E5]">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                        <p className="px-10 md:px-80 md:text-lg">
                        Sepanjang tahun 2022, dunia mengalami turbulensi yang kuat. <b>Pandemi Covid-19 yang berkepanjangan, tekanan inflasi yang tinggi, pengetatan kebijakan moneter di negara maju, dan perang antara Rusia dengan Ukraina menimbulkan gejolak bagi perekonomian global</b>. Dinamika kondisi perekonomian, geopolitik, dan ekologis tersebut mengindikasikan kondisi dunia yang sedang tidak baik-baik saja. 
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <img src="assets/imgs/about-1.png" alt="" className="w-full md:px-24 mt-6" />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <p className="px-10 md:px-80 md:text-lg mt-6">
                        Di tengah badai krisis global, kebijakan fiskal dihadapkan pada alternatif kebijakan yang tidak utopis. <b>APBN dan APBD sebagai instrumen strategis pemerintah, dituntut untuk dapat menjaga keseimbangan kebijakan ekspansif dan berperan sebagai shock absorber dengan risiko yang terkendali</b>, sehingga tetap sehat dan berkelanjutan. Belanja pemerintah pusat dan daerah harus mampu menjadi bantalan perlindungan sosial sekaligus menjadi motor penggerak perekonomian dengan melanjutkan program pemulihan ekonomi dan rencana pembangunan. Oleh karena itu, kualitas penganggaran dan pelaksanaan belanja pemerintah menjadi penting dan menentukan, sehingga mampu menjadi katalis dalam mendorong pertumbuhan perekonomian.
                        </p>
                        <p className="px-10 md:px-80 md:text-lg mt-6">
                        Pada tahun 2022, <b>perekonomian Indonesia tumbuh sebesar 5,31 persen (c-to-c)</b>. Capaian tersebut menjadi modal kuat untuk menghadapi tahun 2023 dengan optimis. Namun demikian, perlambatan perekonomian global yang diamplifikasi oleh peningkatan downside risk tetap menjadi ancaman yang harus diwaspadai. Miskalkulasi kebijakan moneter, apresiasi dolar AS, tekanan inflasi yg lebih lama, tekanan utang di negara berkembang yang rentan, krisis energi Eropa, krisis sektor properti Tiongkok dan fragmentasi internasional menghasilkan ketidakpastian. Selain itu, isu perubahan iklim mengancam produksi bahan pangan turut menjadi perhatian. Dalam rangka menjaga momentum perekonomian Indonesia, <b>Direktorat Pelaksanaan Anggaran, Kementerian Keuangan, menyelenggarakan agenda tahunan berupa Rapat Koordinasi Nasional (Rakornas) Pelaksanaan Anggaran Tahun 2023.</b>  
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <img src="assets/imgs/about-2.png" alt="" className="w-full md:px-24 mt-6" />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                        <p className="px-10 md:px-80 md:text-lg mt-6">
                        <b>Rakornas Pelaksanaan Anggaran 2023 merupakan media konsolidasi antara Kementerian Keuangan selaku Bendahara Umum Negara (BUN) dengan Kementerian Negara/Lembaga dan pemerintah daerah</b>. Rakornas dilaksanakan dalam rangka mengevaluasi kinerja pelaksanaan anggaran tahun 2022 sebagai manifestasi upaya perbaikan yang berkelanjutan. Selain itu, rakornas juga merupakan upaya kolaborasi dan sharing knowledge seluruh pihak yang terlibat dalam pelaksanaan anggaran, termasuk eselon I Kementerian Keuangan lain yang terkait. Terdapat <b>tiga rangkaian kegiatan</b> dalam pelaksanaan Rakornas Pelaksanaan Anggaran 2023, dimulai dari <b>Stakeholder Day, Coaching Clinic, sampai dengan Acara Puncak Rakornas Pelaksanaan Anggaran 2023</b>.
                        </p>
                    <img src="assets/imgs/about-3.png" alt="" className="w-full md:px-24 mt-6 animate__animated" />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <p className="px-10 md:px-80 md:text-lg mt-6">
                    "Jika Anda mengenal musuh dan mengenal diri Anda sendiri, Anda tidak perlu takut akan hasil dari ratusan pertempuran”, begitulah Sun Tzu berkata dalam buku The Art of War. Rakornas Pelaksanaan Anggaran 2023 diharapkan menjadi ajang untuk mendukung implementasi kebijakan fiskal yang ekspansif, pro stability, dan pro growth dalam rangka menyongsong APBN 2023 dengan optimisme tinggi, tanpa menafikan kewaspadaan akan dinamika kondisi perekonomian, geopolitik, dan ekologis global.
                    </p>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}

export default About