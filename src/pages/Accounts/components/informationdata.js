import React from 'react'
// import "../accounts.css"

const InformationData = () => {
    return (
        <>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b> Personal Information</b>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className='row'>
                                <div className="col-12 col-md-4 ">
                                    <div className="form-group">
                                        <label>
                                            <b>First Name </b>
                                        </label>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                placeholder="Jhon"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 ">
                                    <div className="form-group">
                                        <label>
                                            <b>Last Name </b>
                                        </label>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                placeholder="Smith"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 ">
                                    <div className="form-group">
                                        <label>
                                            <b>Phone</b>
                                        </label>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                type="number"
                                                placeholder="Phone No"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="form-group">
                                        <label>
                                            <b>Address</b>
                                        </label>
                                        <div>
                                            <select
                                                className="myaccount_input"
                                                name="contactPreference"
                                            >
                                                <option value="">Select</option>
                                                <option value="1">Address 1</option>
                                                <option value="2">Address 2</option>
                                                <option value="3">Address 3</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                placeholder="Smith"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                placeholder="Smith"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 ">
                                    <div className="form-group">
                                        <label>
                                            <b>City</b>
                                        </label>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <label>
                                            <b>Address</b>
                                        </label>
                                        <div>
                                            <select
                                                className="myaccount_input"
                                                name="contactPreference"
                                            >
                                                <option value="">Select</option>
                                                <option value="1">Address 1</option>
                                                <option value="2">Address 2</option>
                                                <option value="3">Address 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 ">
                                    <div className="form-group">
                                        <label>
                                            <b>Zip</b>
                                        </label>
                                        <div>
                                            <input
                                                className="myaccount_input"
                                                type="text"
                                                placeholder="(123) 456 789"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>  Facebook, Google & Apple Connect</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>You may disconnect your Hibir.com account from facebook, Google or Apple by clicking on the disconnect button below </p>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="pt-3">
                                        <button className="google_social_button" type="button">
                                            Continue With Google
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="pt-3">
                                        <button className="fb_social_button" type="button">
                                            Continue With Facebook
                                        </button>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="pt-3">
                                        <button className="apple_social_button" type="button">
                                            Continue With Apple
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b> Login & Security</b>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>User ID: 123B2ee3985</p>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <label><b>Update Email</b></label>
                                    <div className="myaccount_loginsecurity">
                                        <input
                                            type="text"
                                            className="accountpassupdate_input"
                                            placeholder="johnsmith@gmail.com"
                                        />
                                        <button className="updatepassbtn">Update</button>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <label><b>Update Your Password</b></label>
                                    <div className="myaccount_loginsecurity">
                                        <input
                                            type="password"
                                            className="accountpassupdate_input"
                                            placeholder="********"
                                        />
                                        <button className="updatepassbtn">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationData