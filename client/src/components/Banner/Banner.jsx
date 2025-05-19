import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Banner.css'
import Data from './../../assets/data.js'
import Button from './../Buttons/Button.jsx'
import { Navigate } from 'react-router-dom';


function Banner() {
    const {BannerImg , tagline , aboutUsTagline }= Data.resort;
    
  return (
    
    <>
    <div class="relative w-full h-[90vh] overflow-hidden">
    <img src={BannerImg} class="absolute inset-0 w-full h-full object-cover" alt="Responsive Image"/>
  
  <div class="absolute inset-0 flex flex-col md:align-text-top justify-center text-center items-center  text-white leading-20">
    <h2 class="tagline md:text-4xl text-lg">{tagline}</h2>
    <h3 className='sub-tagline md:text-lg text-sm my-5'>{aboutUsTagline}</h3>
    <Button
        buttonType="primary"
        label={"Explore More"}
        handleButtonClick={Navigate('/categories')}
        prefixIcon={undefined}
        suffixIcon={<FaArrowRight size={'20px'} fontFamily='var( --subheading-font)'/>}
        
      />
  </div>
  </div>

    </>
  )
}

export default Banner