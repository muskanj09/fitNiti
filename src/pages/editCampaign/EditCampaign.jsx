import React from 'react'
import '../editCampaign/editCampaign.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import campaignDetail from '../../img/campaignDetail.png'
import registrationDetail from '../../img/registrationDetail.png'
const EditCampaign = () => {
    return (
        <>
            <Navbar />
            <div className="campaignDetail row">
                <div className="col-6">
                    <img src={campaignDetail} alt="" />
                </div>
                <div className="col-6 campaignContent">
                    <h1>Campaign Details Section</h1>
                    <p>Update details about your campaign</p>
                    <div>
                        <label htmlFor="campaignName">Campaign Name</label>
                        <input type="text" name='campaignname' id='campaignName' placeholder='Enter Campaign Name' className='campaignInput' />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" name="startDate" id="startDate" placeholder='Select Start Date' className='campaignInput' />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <button>Fitness</button>
                        <button>Fitness</button>
                        <button>Fitness</button>
                    </div>
                    {/* <div>
                <label htmlFor="">Category</label>
                <button className='radioLabel'>
                    <input type="radio" name="option" id="option1" value="option1" />
                    <label className='radiLabel' htmlFor="option1">Option 1</label>
                </button>
                <button>
                    <input type="radio" name="option" id="option2" value="option1" />
                    <label htmlFor="">Option 1</label>
                </button>
                <button>
                    <input type="radio" name="option" id="option1" value="option3" />
                    <label htmlFor="">Option 1</label>
                </button>
                <button type='radio' name='radio'>Radio1</button>
                <button type='radio' name='radio'>Radio2</button>
                <button type='radio' name='radio'>Radio3</button>
            </div> */}
                    <div className="row">
                        <div className="col-6">
                            <a href="#" className='btnOutline'>Cancel</a>
                        </div>
                        <div className="col-6">
                            <a href="#" className='btnMain'>Save</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="registrationDetails row">
                <div className="registrationContent col-6">
                    <h1>Registration Details Section</h1>
                    <p>Manage registration details</p>
                <div>
                    <label htmlFor="regFee">Registration Fees</label>
                    <input type="number" className='campaignInput' name="regFee" id="regFee" placeholder='Registration Fees' />
                </div>
                <div>
                    <label htmlFor="maxParticipants">Maximum Participants</label>
                    <input type="number" className='campaignInput' name="maxParticipants" id="maxPartcipants" placeholder='Enter Maximum Participants' />
                </div>
                <div className="row">
                        <div className="col-6">
                            <a href="#" className='btnOutline'>Cancel</a>
                        </div>
                        <div className="col-6">
                            <a href="#" className='btnMain'>Save</a>
                        </div>
                        </div>

                    </div>
                    <div className='col-6'>
                    <img src={registrationDetail} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditCampaign