import React, { useEffect, useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import CustomInput from '../../../ui-components/custominput';
import { BsSearch, BsX } from 'react-icons/bs';
import CustomDropdown from '../../../ui-components/customdropdown';
import { FILTERBAR_BEDS, FILTERBAR_HOMETYPE, FILTERBAR_MOVEINDATE, FILTERBAR_PRICE } from '../../../utils/Constants/global';
import FilterMenueSection from './filtermenuesection';

const FilterBarAllProperty = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    useEffect(() => {
        if (showDropdown) {
            // Prevent background scroll when the dropdown is open
            document.body.classList.add('no-scroll');
        } else {
            // Enable background scroll when the dropdown is closed
            document.body.classList.remove('no-scroll');
        }

        // Remove the added class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showDropdown]);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='filterbar_div_main' style={{position:"relative"}}>
                            <div className='input_border'>
                                <MdOutlineMyLocation className='location_search_icon' />
                                <CustomInput className="location_search" placeholder="USA" type="text" id="locationSearch" name="locationSearch" />
                                <BsSearch className='filter_icon' />
                            </div>
                            <div className='input_border'>
                                <CustomDropdown
                                    className="filter_bar_price"
                                    id="filter_bar_price"
                                    name="filter_bar_price"
                                    options={FILTERBAR_PRICE}
                                />
                            </div>
                            <div className='input_border'>
                                <CustomDropdown
                                    className="filter_bar_price"
                                    id="filter_bar_price"
                                    name="filter_bar_price"
                                    options={FILTERBAR_BEDS}
                                />
                            </div>
                            <div className='input_border'>
                                <CustomDropdown
                                    className="filter_bar_price"
                                    id="filter_bar_price"
                                    name="filter_bar_price"
                                    options={FILTERBAR_HOMETYPE}
                                />
                            </div>
                            <div className='input_border'>
                                <CustomDropdown
                                    className="filter_bar_price"
                                    id="filter_bar_price"
                                    name="filter_bar_price"
                                    options={FILTERBAR_MOVEINDATE}
                                />
                            </div>
                            <div className='' >
                                <button className='filter_button' onClick={toggleDropdown}>
                                    {showDropdown ? <BsX className='cross_size'/> : 'Filter'}
                                </button>
                            </div>
                            {showDropdown && (
                                <div className="your-dropdown-class">
                                   <FilterMenueSection/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterBarAllProperty;
