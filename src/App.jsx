import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavbarTop from "./components/nav/NavbarTop"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import PAGallery from "./pages/gallery/PAGallery"
import About from "./pages/about/About"

const App = () => {
    return(
        <div className="static">
            <Router>
                <NavbarTop/>
                <Routes>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery" element={<PAGallery/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App