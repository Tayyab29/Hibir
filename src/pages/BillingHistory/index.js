import React from 'react'
import "./billinghistory.css";
import CustomInput from '../../ui-components/custominput';
import Footer from '../../components/Footer/footer';

const BillingHistory = () => {
    return (
        <>
            <div className="container">
                <section className="custom_padding">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="account_heading_border">
                                <h3>
                                    <b>Billing History</b>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-6"></div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="account_change_language">
                                <h5>
                                    <b>Billing History</b>
                                </h5>
                                <p>Search Your Transaction History </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10' style={{ paddingRight: "0px" }}>
                            <CustomInput type="text" placeholder="Search By Property" className="billinghistory_input" />
                        </div>
                        <div className='col-md-1' style={{ paddingLeft: "8px" }}>
                            <button className='billinghistory_button'>Search</button>
                        </div>
                        <div className='col-md-1'>
                            <button className='billinghistoryupdate_button'>Update</button>
                        </div>

                    </div>
                </section>
                {/* Table Section */}
                <section className="custom_padding">
                    <div className='row'>
                        <div className='col-12'>
                            <table className="table billing_history_tbl">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Confirmation No.</th>
                                        <th>Status</th>
                                        <th>Description</th>
                                        <th>Property</th>
                                        <th>Amount</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Date</td>
                                        <td>Confirmation No.</td>
                                        <td>Status</td>
                                        <td>Description</td>
                                        <td>Property</td>
                                        <td>Amount</td>

                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>Confirmation No.</td>
                                        <td>Status</td>
                                        <td>Description</td>
                                        <td>Property</td>
                                        <td>Amount</td>

                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>Confirmation No.</td>
                                        <td>Status</td>
                                        <td>Description</td>
                                        <td>Property</td>
                                        <td>Amount</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <Footer display="none" marginTop="0rem" />
            </section>

        </>
    )
}

export default BillingHistory