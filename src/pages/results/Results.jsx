import React from 'react'
import '../results/results.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import '../../components/navbar/navbar.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import activeCard from '../../img/activeEvent.png'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
const Results = () => {
  return (
    <>
<Navbar />
<section className='section-active-events'>
        <div className="active-events-heading-flex row">
          <div className='col-8'>
            <h1>Past</h1>
            <h1>Events</h1>
          </div>
          <a href="#" className='col-md-2 col-sm-4'>Search <CiSearch /></a>
        </div>
        <div className="active-events-card-flex row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={activeCard} alt="" />
              <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
              <div className="active-event-card-content active-event-card">
                <h3>Virtual  Run Challenge - Jul 2024</h3>
                <div>
                  <h6>HM(21.1K)</h6>
                  <h6>10K</h6>
                  <h6>5K</h6>
                </div>
                <p><CiLocationOn /> AnyWhere in the World!!</p>
                <h5>Registration closed on 30 Jul 2024</h5>
                <div>
                  <Link to='/detailedEvent'>View Results</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="activeCard">
            <img src={activeCard} alt="" />
            <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
            <div className="active-event-card-content active-event-card">
              <h3>Virtual  Run Challenge - Jul 2024</h3>
              <div>
                <h6>HM(21.1K)</h6>
                <h6>10K</h6>
                <h6>5K</h6>
              </div>
              <p><CiLocationOn /> AnyWhere in the World!!</p>
              <h5>Registration closed on 30 Jul 2024</h5>
              <div>
                <Link to='/detailedEvent'>View Results</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="activeCard">
            <img src={activeCard} alt="" />
            <p className='eventDate'><FaCalendarAlt /> 1st - 31st jul,2024</p>
            <div className="active-event-card-content active-event-card">
              <h3>Virtual  Run Challenge - Jul 2024</h3>
              <div>
                <h6>HM(21.1K)</h6>
                <h6>10K</h6>
                <h6>5K</h6>
              </div>
              <p><CiLocationOn /> AnyWhere in the World!!</p>
              <h5>Registration closed on 30 Jul 2024</h5>
              <div>
                <Link to='/detailedEvent'>View Results</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Results