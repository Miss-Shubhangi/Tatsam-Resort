import React from 'react'
import './Banner.css'
import Data from './../../assets/data.js'
import Header from '../Header/Header.jsx';
import Button from './../Buttons/Button.jsx'

function Banner() {
    const {BannerImg , tagline , aboutUsTagline }= Data.resort;
  return (
    
    <>
    <div class="position-relative banner-section">
    <img src={BannerImg} class="img-fluid banner-img w-100" alt="Responsive Image"/>
  
  <div class="position-absolute top-50 start-50 top-md-0 start-md-0 translate-middle text-center">
    <h2 class="tagline ">{tagline}</h2>
    <p className='sub-tagline'>{aboutUsTagline}</p>
    <Button/>
  </div>
  </div>

    </>
  )
}

export default Banner