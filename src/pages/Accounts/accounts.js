import React from 'react'
import "./accounts.css";
import Footer from '../../components/Footer/footer';
import InformationData from './components/informationdata';
const AccountsIndex = () => {
    return (
        <>
            <div className="container">
                <section className='custom_padding'>
                    <div className="row">
                        <div className='col-md-4'>
                            <div className="account_heading_border">
                                <h3><b>My Account</b></h3>
                            </div>
                        </div>
                        <div className='col-md-6'></div>
                        <div className='col-md-2'>
                            <div className='align_savebtn'>
                                <button className='myaccount_btn' type='button'>
                                    Save Settings
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='account_change_language'>
                                <h5><b>Account</b></h5>
                                <p>Communication Language Preference</p>
                            </div>
                        </div>
                        <div className="account_radio_section">
                            <div className="checkbox_class">
                                <label className="container_radio">
                                    English
                                    <input type="radio" checked="checked" name="radio" value="english" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container_radio">
                                    Espanol
                                    <input type="radio" name="radio" value="espanol" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <InformationData/>
                           
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <Footer display="none" marginTop="0rem" />
            </footer>
        </>
    )
}

export default AccountsIndex