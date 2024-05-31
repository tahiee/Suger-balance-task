import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Component/Header'
import Navbar from '../Component/navbar/Navbar'
import Home from '../Component/Home'
import Details from '../Component/Details'
import DetailsChild from '../Component/DetailsChild'
import CreativeProduct from '../Component/CreativeProduct'
import PrivacyPolicy from '../Component/PrivacyPolicy'
import CompanyDetails from '../Component/CompanyDetails'
import Footer from '../Component/Footer'


const RouterConfig = () => {

    return (
        <>
            <BrowserRouter>
            <Header/>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}  />
                    <Route path='details' element={<Details/>}  />
                </Routes>
                <Details/>
                <DetailsChild/>
                <CreativeProduct/>
                <PrivacyPolicy/>
                <CompanyDetails/>
                <Footer/>
            </BrowserRouter>
        </>

    )
}

export default RouterConfig