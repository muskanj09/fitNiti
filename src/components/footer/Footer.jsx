import React from 'react'
import '../footer/footer.css'
import footerLogo from '../../img/navLogo.png'
import { Link } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src={footerLogo} className='footerLogo' alt="" />
          <p>&copy; 2024. All Rights Reserved.</p>
        </div>
        <div>
          <h2>Useful links</h2>
          <div className="footerGrid row">
            <Link to='/' className='col-4'>Home</Link>
            <Link to='/events' className='col-5'>Events</Link>
            <Link to='/results' className='col-4'>Results</Link>
            <Link to='/charity' className='col-5'>Charity</Link>
            <Link to='/blogs' className='col-4'>Blogs</Link>
          </div>
        </div>
        <div>
          <h2>Our socials</h2>
          <div className="footerGrid row">
            <a href="https:/instagram.com" className='col-4'><RiInstagramFill className='footerIcon ' /></a>
            <a href="https:/youtube.com" className='col-5'><FaYoutube className='footerIcon col-5' /></a>
            <a href="https:/facebook.com" className='col-4'><FaFacebook className='footerIcon col-4' /></a>
            <a href="https:/x.com" className='col-5'><FaTwitter className='footerIcon col-5' /></a>
            
            
          </div>
        </div>
        <div className='footerContact'>
          <h2>Contact us</h2>
          <div>
            <FaPhoneAlt className='contactIcon' />
            91342333095
          </div>
          <div>
            <MdEmail className='contactIcon' />
            fitniti@gmail.com
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer