import React from 'react'
import '../detailedBlog/detailedblog.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BlogImg from '../../img/detailedBlog.png'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const DetailedBlog = () => {
  return (
    <>
    <Navbar />
    <div className="sectionDetailedBlog">
      <img src={BlogImg} alt="" />
      <h1 className='blogHeading'>Get Your <span className='headingColor'>Run On</span> </h1>
      <p>Looking for ways to get outside and get active? Try our couch-to-2k or couch-to-5k family running plan. Our 2k plan is perfect for beginners or younger children, while our 5k plan is great for novice runners or older children and teens looking to challenge themselves. Both plans are four weeks in duration, twice per week. We also included two bonus runs – a hill run and stair run – for an added challenge.</p>
      <h2>Each day’s run will be similar in structure:</h2>
      <h3>Goal Setting</h3>
      <p>Each day will focus on a new target. We encourage you to discuss your individual goal for the day’s run as a family. Encourage everyone who is running with you to set a goal that is achievable, and is unique to their particular need. For example, it could be trying to go slightly faster or longer than your previous run, or incorporating a new element, such as a hill run or running up a set of stairs.</p>
      <h3>Warm Up & Dynamic Stretch</h3>
      <p>We will begin every run with a 1-minute walk to get your heart pumping, then move to dynamic stretching. This simply means moving your joints through a range of motion. At the beginning of our workout we want to stretch in a way that helps us to loosen our muscles and joints and reduces strains.</p>
      <h3>Run!</h3>
      <p>Each day we will build strength and stamina by incorporating run/walks, longer endurance runs, and shorter sprints. You will have the choice to follow the 2k or 5k plan each day. Even if you are following one plan, you can always mix it up and follow the other plan if you feel like an extra challenge, or if your body tells you to take it slow that day</p>
      <h3>Cool Down & Static Stretch</h3>
      <p>Following your run, we recommend walking to bring your heart rate back down. We will then end with a few static stretches which involve holding a stretch for 20-40 seconds</p>
      <div className="sectionRating">
        <div className="ratingBg">
          <div className="iconFlex">
          <FaStar className='fillIcon' />
          <FaStar className='fillIcon' />
          <FaStar className='fillIcon' />
          <FaStar className='fillIcon' />
          <CiStar />
          </div>
          <h3>4.5 Out Of 5</h3>
        </div>
        <div className="ratingGrid">
          <div className="ratingFlex">
            <p>Rate this toilet based on your experience.</p>
          <div className="iconFlex">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          </div>
          </div>
          <div className="ratingFlex">
            <p>Share details of your experience with this Toilet</p>
            <a href="#">Write a Review</a>
            </div> 
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default DetailedBlog