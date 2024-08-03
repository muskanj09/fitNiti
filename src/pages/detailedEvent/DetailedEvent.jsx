import React from 'react'
import '../detailedEvent/detailedEvent.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import EventImg from '../../img/detailedActiveEvent.png'
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
const DetailedEvent = () => {
  return (
    <>
    <Navbar />
    <div className="sectionDetailedEvent">
      <img src={EventImg} alt="" />
      <p className='detailedEventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
      <h1>Virtual  Run Challenge - Jul 2024</h1>
      <div className="eventFlex">
        <h6>HM(21.1K)</h6>
        <h6>10K</h6>
        <h6>5K</h6>
      </div>
      <h4><IoLocationSharp />Anywhere in the world!!!</h4>
      <p>Running has significant physical and mental health benefits, including improving cardiovascular health, reducing stress, and boosting energy levels. Participating in a virtual marathon provides an opportunity to establish a regular running routine, develop discipline, and connect with a global community of runners.</p>
      <div className="eventGrid">
        <h6>Registration closed on 30 Jul 2024</h6>
        <a href="#">Register</a>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default DetailedEvent