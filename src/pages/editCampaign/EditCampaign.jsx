import React from 'react'
import '../editCampaign/editCampaign.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import campaignDetail from '../../img/campaignDetail.png'
import registrationDetail from '../../img/registrationDetail.png'
import contactInfo from '../../img/contactInfo.png'
const EditCampaign = () => {
    return (
        <>
            <Navbar />
            <div className="campaignDetail row">
                <div className="sectionImg col-lg-6 col-md-12">
                    <img src={campaignDetail} className='campaignImg' alt="" />
                </div>
                <div className="col-lg-6 col-md-12 campaignContent">
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
                <div className="registrationContent col-lg-6 col-md-12">
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
                    <div className='sectionImg  col-lg-6 col-md-12'>
                    <img src={registrationDetail} className='campaignImg' alt="" />
                </div>
            </div>
            <div className="contactInfo row">
                    <div className="sectionImg col-lg-6 col-md-12">
                        <img src={contactInfo} className='campaignImg' alt="" />
                    </div>
                    <div className="contactContent col-lg-6 col-md-12">
                        <h1>Contact Information Section</h1>
                        <p>Update contact details for the campaign</p>
                        <div>
                            <label htmlFor="contactEmail">Contact Email</label>
                            <input type="email" className='campaignInput' name="contactEmail" id="contactEmail" placeholder='Enter Contact Email' />
                        </div>
                        <div>
                            <label htmlFor="phoneNum">Phone Number</label>
                            <input type="number" className='campaignInput' name="phoneNum" id="phoneNum" placeholder='Enter Phone Number' />
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
            </div>
            <div className="uploadImg">
                <div className='uploadBg'>
                    <label htmlFor="imageUpload" className='imageLabel'>+</label>
                </div>
                
                <input type="file" name="imageUpload" id="imageUpload" accept='image/*' style={{fontSize:'0', position:"absolute", left:"-999px"}} />
                <div>
                 <h1>Image Gallery</h1>
                <h3>Upload images from campaign <br /> events</h3>   
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default EditCampaign