import React, { useState } from 'react';
import CustomInput from '../../../ui-components/custominput';
import InputRange from 'react-input-range';

const FilterMenueSection = () => {
    const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

    const handleRangeChange = (values) => {
        setRangeValues(values);
    };

    const handleMinInputChange = (e) => {
        const minValue = parseInt(e.target.value);
        setRangeValues({ ...rangeValues, min: minValue });
    };

    const handleMaxInputChange = (e) => {
        const maxValue = parseInt(e.target.value);
        setRangeValues({ ...rangeValues, max: maxValue });
    };
    const [activeButton, setActiveButton] = useState(0); // Use state to track active button index

    const BedroomsData = ['Any', 'Studio', '1+', '2+', '3+'];
    const BathroomsData = ['1+', '2+', '3+'];

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    const data = [
        { name: 'Appartments', count: 45 },
        { name: 'Homes', count: 75 },
        { name: 'Condos', count: 67 },
        { name: 'Townhomes', count: 77 },
        { name: 'Basements', count: 87 },
        { name: 'Rooms Only', count: 87 },
    ];
    const dataAmenities = [
        { name: 'In Unit Washer & Dryer', count: 45 },
        { name: 'Air Conditioning', count: 75 },
        { name: 'Parking', count: 67 },
        { name: 'Dishwasher', count: 77 },
        { name: 'Furnished', count: 87 },
        { name: 'In Unit Washer & Dryer', count: 45 },
        { name: 'Air Conditioning', count: 75 },
        { name: 'Parking', count: 67 },
        { name: 'Dishwasher', count: 77 },
        { name: 'Furnished', count: 87 },
    ];
    return (
        <>
            {/* section 1 */}
            <div className='custom_width_100'>
                <div className='custom_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Monthly Rent</b></p>
                        <div className="input-range">
                            <CustomInput className="filter_menu_input" type="number" id="minRate" name="minRate" placeholder="Min Rate" value={rangeValues.min} onChange={handleMinInputChange} />
                            <div className='to_lbl'>To</div>
                            <CustomInput className="filter_menu_input" type="number" id="maxRate" name="maxRate" placeholder="Max Rate" value={rangeValues.max} onChange={handleMaxInputChange} />
                            <InputRange
                                minValue={0}
                                maxValue={100}
                                value={rangeValues}
                                onChange={handleRangeChange}
                            />
                        </div>

                    </div>
                </div>
                <div className='custom_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Bedrooms</b></p>
                        <div>
                            {BedroomsData.map((BedroomsData, index) => (
                                <button
                                    key={index}
                                    className={index === activeButton ? 'activeButton' : 'inactiveButton'}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {BedroomsData}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='filter_main_div'>
                        <p><b>Bathrooms</b></p>
                        <div>
                            {BathroomsData.map((BathroomsData, index) => (
                                <button
                                    key={index}
                                    className={index === activeButton ? 'activeButton' : 'inactiveButton'}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {BathroomsData}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            {/* Section 2 */}
            <div className='custom_width_100'>
                <div className='homeType_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Home Types</b></p>
                        {data.map((item, index) => (
                            <>
                                <div key={index} className="homeTypes_main">
                                    <p><b>{item.name} ({item.count})</b></p>
                                    <CustomInput className="home_type_checkbox" type="checkbox" id={`checkbox${index}`} name={`checkbox${index}`} />
                                </div>
                            </>
                        ))}

                    </div>
                </div>
                <div className='homeType_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Amenities</b></p>
                        <div className='amenities_scroll'>
                            {dataAmenities.map((item, index) => (
                                <>
                                    <div key={index} className="homeTypes_main">
                                        <p><b>{item.name} ({item.count})</b></p>
                                        <CustomInput className="home_type_checkbox" type="checkbox" id={`checkbox${index}`} name={`checkbox${index}`} />
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            {/* Section 3 */}
            <div className='custom_width_100'>
                <div className='custom_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Keywords</b></p>
                        <CustomInput type="text" placeholder="(i.e. fireplace,carpet,etc)" id="keywordsinput" name="keywordsinput" className="keywords_input" />
                    </div>
                </div>
                <div className='custom_width_50'>
                    <div className='filter_main_div'>
                        <p><b>Square Footage Range</b></p>
                        <div className="input-range">
                            <CustomInput className="filter_menu_input" type="number" id="minRate" name="minRate" placeholder="Min Rate" value={rangeValues.min} onChange={handleMinInputChange} />
                            <div className='to_lbl'>To</div>
                            <CustomInput className="filter_menu_input" type="number" id="maxRate" name="maxRate" placeholder="Max Rate" value={rangeValues.max} onChange={handleMaxInputChange} />
                            <InputRange
                                minValue={0}
                                maxValue={100}
                                value={rangeValues}
                                onChange={handleRangeChange}
                            />
                        </div>

                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            {/* Button Section */}
            <div className='custom_width_100 filter_main_button'>
                <button className='clearFilterbtn'>Clear Filter</button>
                <button className='applyFilterbtn'>Apply Filter</button>
            </div>
        </>
    );
};

export default FilterMenueSection;
