import React from 'react'
import '../myCampaign/myCampaign.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import campaignCard from '../../img/blog.png'
import blog from '../../img/blog.png'
import campaignProfile from '../../img/campaignProfile.png'
import activeCard from '../../img/activeEvent.png';
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

const MyCampaign = () => {
  return (
    <>
    <Navbar />
    <section className='sectionMyCampaign'>
        <div className=" active-events-heading-flex row">
          <div className='col-8'>
            <h1>My</h1>
            <h1>Campaigns</h1>
          </div>
          <a href="#" className='col-md-2 col-sm-4'>Search <CiSearch /></a>
        </div>
        <div className="active-events-card-flex row">
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
                
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className=" activeCard">
              <img src={campaignCard} alt="" />
              <div className="cardContent">
                <div className="cardHeadingFlex">
                    <h3>Go run</h3>
                    <img src={campaignProfile} alt="" />
                </div>
                <h4>In Support Of Seva Bharathi</h4> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat </p>
                <h3>1,00,000</h3>
                <Link to='/editCampaign'>Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default MyCampaign