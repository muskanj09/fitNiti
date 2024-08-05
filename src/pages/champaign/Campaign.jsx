import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../champaign/campaign.css'
import { RxCross1 } from "react-icons/rx";
const Campaign = () => {
  return (
    <>
    <Navbar />
 <section className='sectionCampaign'>
<section className="sectionForm">
    <div className="campaignHeading">
      <h1>Create Campaign</h1>
      <RxCross1 />
    </div>
    <form action="post">
      <div className="formGrid row">
        <select id="selectOrg"className='col-5'  name="selectOrg">
          <option value={1} disabled hidden>Select Organization</option>
          <option value={1}>1</option>
          <option value={1}>1</option>
          <option value={1}>1</option>
        </select>
        <div className="col-1"></div>
        <select id="selectOrg" className='col-5'  name="selectOrg">
          <option value={1}disabled hidden>Select NGO</option>
          <option value={1}>1</option>
          <option value={1}>1</option>
          <option value={1}>1</option>
        </select>
      </div>
      <div className="formGrid row">
        <input type="text" className='col-5' placeholder="Campaign Name" />
        <div className="col-1"></div>
        <input type="number" className='col-5' name="targetAmt" id="targetAmt" placeholder="Target Amout" />
      </div>
      <div className="formGrid row">
        <div className="formFlex col-5">
          <label htmlFor>Start Date</label>
          <input type="date" name="start" id="start" />
        </div>
        <div className="col-1"></div>
        <div className="formFlex col-5">
          <label htmlFor>End Date</label>
          <input type="date" name="end" id="end" />
        </div>
      </div>
      <div className="formFlex row">
        <label htmlFor="cause">Cause</label>
        <textarea name="Cause" id="cause" defaultValue={""} />
      </div>
      <div className="formFlex row">
        <button type="submit">Save</button> 
      </div>
      <div className="formFlex row">
        <button type="reset">Cancel</button> 
      </div>
    </form>
  </section>
 </section>

</>
  )
}

export default Campaign