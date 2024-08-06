import React from 'react'
import '../charity/charity.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Campaign from '../../img/campaign.png'
import charityPartner1 from '../../img/charityPartner1.png'
import charityPartner2 from '../../img/charityPartner2.png'
import charityPartner3 from '../../img/charityPartner3.png'
import { Link } from 'react-router-dom'
const Charity = () => {
  return (
    <>
      <Navbar />
      <section className='sectionCharity'>
        <div className="charityGrid row">
          <div className="charityContent col-lg-6">
            <h1>Make a donation or launch a fund-raising campaign</h1>
            <p>Make a difference by supporting our charity partners in society to demonstrate their presence and work in many areas such as health, education, environment and other causes.</p>
            <div className="charityBtn row">
              <Link className='col-5' to='/campaign'>Create Campaign</Link>
              <div className="col-1"></div>
              <Link to='/myCampaign' className='col-5'>My Campaign</Link>
            </div>
          </div>
          <img src={Campaign} className='col-lg-6' alt="" />
        </div>
        <h1 className='charityHeading'>Please find below the list of charities and non-profit organizations we currently support.</h1>
        <section className='sectionCharityPartners'>
          <h1 className='charityHeading'>Our Charity Partners</h1>
          <div className="charityPartnerFlex">
            <img src={charityPartner1} alt="" />
            <img src={charityPartner2} alt="" />
            <img src={charityPartner3} alt="" />
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Charity