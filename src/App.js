import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/Pages/About/About'
import Service from './Components/Pages/Services/Service'
import Contact from './Components/Pages/Contact/Contact'
import Loader from './Components/Loader/Loader'
import gif from "../src/Assets/Logo/welcome.gif"
import ScrollToTop from 'react-scroll-to-top'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, 2000);
    }, []);
  return (
    isLoading ?
    <Loader src={gif} alt="" title="Where Every Print Tells a Story..."/>:
    <>
    <BrowserRouter>
    <ScrollToTop
    smooth
    viewBox="3 0 91 88"
    color="#B3005F"
    height="30" 
    width="28"
    style={{backgroundColor:"#ffffff",borderRadius:"50%",border:"1px solid #B3005F", right:'20px', zIndex:'999'}}
    svgPath="M47.3,1.7c-2.2-2.6-6.4-1.5-8.1,1C29.9,17.4,19.4,31.1,5.9,42.2c-3.6,2.9-0.3,7.9,3.4,8.3   c6.1,0.6,12.2,1.1,18.3,1.7c-0.6,5.3-1.1,10.6-1.7,15.8c-0.6,6-2.4,12.8-0.4,18.6c0.6,1.7,2.8,2,3.8,0.5c3.4-5.1,3.4-12.2,4.3-18.1   c1-6.5,2-13.1,2.9-19.6c0.5-3.1-1.2-5.1-4.2-5.5c-4-0.5-7.9-1.1-11.9-1.6c9-8.5,16.7-18.2,23.7-28.5c8.6,10.1,17.4,19.9,26.9,29   c-3.4,0.3-6.8,0.5-10.2,0.8c-2.3,0.2-5.1,2-4.8,4.8c1.4,10.6,2.7,21.2,4.1,31.9c-6.5,0.4-12.9,1.6-19.3,2.2c-4.9,0.4-4.7,6.9,0,7.5   c8.2,1.1,16.2,0.3,24.4-0.1c1.6-0.1,2.7-0.7,3.5-1.6c1.1-0.7,1.9-2,1.6-3.9c-1.1-8.7-2.8-21-4.2-31.7c5.3-0.5,10.6-1,15.8-1.3   c3.8-0.3,6.5-5.1,3.3-8C71.6,30.4,59.5,16,47.3,1.7z"
    />
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App