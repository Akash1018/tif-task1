import React from 'react'
import icon from '../static/icon.png'
import './Footer.css'
import {CgFacebook} from 'react-icons/cg'
import {BsTwitter, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='main'>
        <img className='van' src={icon} />
        <div className='contact'>
            <h1 className='footerHead'>Contact Us</h1>
            <p className='footerPara'>Contact Us
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            (904) 443-0343</p>
            <p className='footerPara'>example2020@gmail.com</p>
            <p className='footerPara'>(904) 443-0343</p>
        </div>
        <div className='More'>
            <h1 className='footerHead'>More</h1>
            <p className='footerPara'>About Us</p>
            <p className='footerPara'>Products</p>
            <p className='footerPara'>Career</p>
            <p className='footerPara'>Contact Us</p>
        </div>
        <div className='last'>
            <h1 className='Social'>Social Links</h1>
            <div className='fit'>
              <BsInstagram />
              <BsTwitter />
              <CgFacebook />
            </div>
            <p className='footerPara'>© 2022 Food Truck Example</p>
        </div>
    </div>
  )
}

export default Footer