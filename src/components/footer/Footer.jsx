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
          <div className="footerGrid">
            <Link to='/'>Home</Link>
            <Link to='/events'>Events</Link>
            <Link to='/results'>Results</Link>
            <Link to='/charity'>Charity</Link>
            <Link to='/blogs'>Blogs</Link>
          </div>
        </div>
        <div>
          <h2>Our socials</h2>
          <div className="footerGrid">
            <RiInstagramFill className='footerIcon' />
            <FaYoutube className='footerIcon' />
            <FaFacebook className='footerIcon' />
            <FaTwitter className='footerIcon' />
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