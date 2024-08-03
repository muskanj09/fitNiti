import React from 'react'
import '../events/events.css'
import '../../components/navbar/navbar.css'
import logo from '../../img/navLogo.png'
import activeCard from '../../img/activeEvent.png';
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import Footer from '../../components/footer/Footer'
const Events = () => {
  return (
    <>
      <section className='sectionEvents'>
      <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <img src={logo} className='navLogoHome' alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse navContent" id="navbarSupportedContent">
              <ul className="navbar-nav navList me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className='navLink'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/events' className='navLink'>Events</Link>
                </li>
                <li className="nav-item">
                  <Link to='/results' className='navLink'>Results</Link>
                </li>
                <li className="nav-item">
                  <Link to='/charity' className='navLink'>Charity</Link>
                </li>
                <li className="nav-item">
                  <Link to='/blogs' className='navLink'>Blogs</Link>
                </li>
              </ul>
              <form className="d-flex navbutton">
                <Link to='/login' className='btn btn-outline-light'>Sign In</Link>
                <Link to='/register' className='btn'>Sign Up</Link>
              </form>
            </div>
          </div>
        </nav>
        <div className="eventHeading">
          <div>
            <h1>“ <span className='head'>Run</span></h1>
            <h1>Together,</h1>
            <h1> <span className='head'>Stronger</span></h1>
            <h1>Together"</h1>
          </div>
          <p>Join the Community. Discover Events. Achieve Your Goals.</p>
        </div>
      </section>


      <section className='section-active-events'>
        <div className="active-events-heading-flex row">
          <div className='col-8'>
            <h1>Active</h1>
            <h1>Events</h1>
          </div>
          <a href="#" className='col-md-2 col-sm-4'>Search <CiSearch /></a>
        </div>
        <div className="active-events-card-flex row">
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                  <Link to='/detailedEvent'>Register</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                <Link to='/detailedEvent'>Register</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
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
                <Link to='/detailedEvent'>Register</Link>
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

export default Events