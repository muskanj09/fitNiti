import React from 'react'
import '../home/home.css'
import logo from '../../img/navLogo.png'
import HeaderImg from '../../img/header.png'
import activeCard from '../../img/activeEvent.png'
import Portal1 from '../../img/portal1.png'
import Portal2 from '../../img/portal2.png'
import Portal3 from '../../img/portal3.png'
import mission from '../../img/vision.png'
import ProgramCard1 from '../../img/programCard1.png'
import ProgramCard2 from '../../img/programCard2.png'
import ProgramCard3 from '../../img/programCard3.png'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <>
      <header>
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
        <div className="homeGrid row">
          <div className="headerContent col-md-6">
            <p><span className='fontBold'>As We <br /> Run,</span>  <span className='textNrml'> We <br /> Become</span> </p>
            <Link to='/events'>Explore Events</Link>
          </div>
          <div className='col-md-6'>
            <img src={HeaderImg} alt="" />
          </div>
        </div>
      </header>
      <section className='section-active-events'>
        <div className="active-events-heading-flex row">
          <div className='col-8'>
            <h1>Active</h1>
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
                  <Link to='/detailedEvent'>Register</Link>
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
                <Link to='/detailedEvent'>Register</Link>
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
                <Link to='/detailedEvent'>Register</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='section-runner-portal'>
        <div className="portal-image">
          <div className="portalHeading col-12">
            <h1>The</h1>
            <h1>Runner's </h1>
            <h1>portal</h1>
          </div>

          <img src={Portal3} className='portal-img portal-img-3' alt="" />
          <img src={Portal2} className='portal-img portal-img-2' alt="" />
          <img src={Portal1} className='portal-img portal-img-1' alt="" />
        </div>

      </section>
      <section className='sectionMissionVision'>
        <img src={mission} alt="" />
        <h1 className='visionHeading'>Level up <br /> your game</h1>
        <div className="sectionMission">
          <div className="missionFlex">
            <div className="visionGrid">
              <h2>Our Vision</h2>
              <p>Integer id suscipit felis, vel efficitur leo. Phasellus ultrices, quam eu feugiat ultrices, mi lacus facilisis nulla laoreet.</p>
            </div>
            <div className="visionGrid">
              <h2>Our Mission</h2>
              <p>Nullam nec dignissim risus. Duis at lorem in sem luctus faucibus. Mauris finibus vestibulum felis, non aliquam neque.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionOurProgram'>
        <div className="ourprogram">
          <h1>Our <span className='programheading'>Programs</span> </h1>
          <div className="programCardFlex">
            <img src={ProgramCard1} alt="" />
            <img src={ProgramCard2} alt="" />
            <img src={ProgramCard3} alt="" />
          </div>
        </div>

      </section>
      <section className='section-marathon-cards'>
        <div className="marathonCardFlex">
          <div className="marathonHover">
            <CiFlag1 className='marathonIcon' />
            <div className="marathonCard">
              <h1>Marathon managment</h1>
              <p>Portal for complete management of marathon running events. Starting from registrations,BIB management to leaderboard.</p>
            </div>
          </div>
        </div>
        <div className="marathonCardFlex">
          <div className="marathonHover">
            <CiGift className='marathonIcon' />
            <div className="marathonCard">
              <h1>Charity Platform</h1>
              <p>Charity portal for donations and marathon charity BIBs for recognized and verified NGOs. Official charity platform partner for NMDC Hyderabad Marathon 2022.</p>
            </div>
          </div>
        </div>
        <div className="marathonCardFlex">
          <div className="marathonHover">
            <TbWorld className='marathonIcon' />
            <div className="marathonCard">
              <h1>Community management</h1>
              <p>Connecting corporate wellness programs and CSR by hosting corporate specific community challenges for employees</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home