import React from "react";
import { useState } from "react";
import {
  BsChevronRight,
  BsInfoCircle,
  BsPlus,
  BsPlusCircle,
} from "react-icons/bs";
import { useDropzone } from "react-dropzone";

const CondominiumDetails = () => {
  //checkbox array
  const checkboxData = [
    { id: 1, label: "Gas", checked: false },
    { id: 2, label: "Water", checked: false },
    { id: 3, label: "Electricity", checked: false },
    { id: 4, label: "Heat", checked: false },
    { id: 5, label: "Trash Removal", checked: false },
    { id: 6, label: "Sewer", checked: false },
    { id: 7, label: "Cable", checked: false },
    { id: 8, label: "Air Condition", checked: false },
    // ... Add more checkbox data objects
  ];
  //   const [selectedDate, setSelectedDate] = useState("");

  //   const handleDateChange = (event) => {
  //     const selectedDateValue = event.target.value;
  //     setSelectedDate(selectedDateValue);
  //   };

  const [selectedImage, setSelectedImage] = useState(null);
  //checkbox state

  const [checkboxes, setCheckboxes] = useState(checkboxData);

  const onDrop = (acceptedFiles) => {
    // Assuming you want to handle only one image
    const imageFile = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  //check box
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h3>
                <b>Condominium Details</b>
              </h3>
            </div>
            <div className="col-md-4 col-12">
              <div className="save_publish">
                <button className="condominium_save" type="button">
                  Save
                </button>
                <button className="condominium_publish" type="button">
                  Publish
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <p className="condominum_p_text">
                <b>There Are Many Variations of-Lorem Ipsum, QC H1PZ4</b>
              </p>
            </div>
            <div className="col-md-4 col-12">
              <div className="props_view_all">
                <button className="View_all_props" type="button">
                  View All Property <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div style={{ textAlign: "center" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.10063142015!2d-75.15008820724282!3d38.38795021655193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d671ac93de8b%3A0xb4bc715a3af31672!2sOcean%20City%2C%20MD%2C%20USA!5e0!3m2!1sen!2s!4v1693143288336!5m2!1sen!2s"
            style={{ width: "1290px", height: "300px" }}
          ></iframe>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-3">
              <h3>
                <b>Unit Info</b>
              </h3>
            </div>
            <div className="col-12 pt-3">
              <table className="table table-bordered condominium_table_head">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>
                      Unit <BsInfoCircle className="info_hov" />
                    </th>
                    <th>Beds</th>
                    <th>Baths</th>
                    <th>Sq.Ft.</th>
                    <th>Rent</th>
                    <th>Deposit</th>
                    <th>Lease Length</th>
                    <th>Available On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>No Image Available</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input_tbl"
                        placeholder="2"
                      />
                    </td>
                    <td>
                      <select className="select_tbl">
                        <option value="0">1.0</option>
                        <option value="1">2.0</option>
                      </select>
                    </td>
                    <td>
                      <select className="select_tbl">
                        <option value="0">1.0</option>
                        <option value="1">2.0</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input_tbl"
                        placeholder="2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input_tbl"
                        placeholder="2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input_tbl"
                        placeholder="2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input_tbl"
                        placeholder="2"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="input_tbl"
                        placeholder="mm/dd/yyyy"
                        // value={selectedDate}
                        // onChange={handleDateChange}
                        // max={new Date().toISOString().split("T")[0]}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-2 add_another_style">
              <BsPlus className="plus_icon" /> <span>Add Another Units</span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-3">
              <h3>
                <b>General Property Info</b>
              </h3>
            </div>
            <div className="col-12 pt-3">
              {/*  */}
              <h6>
                <b>Photo</b>
              </h6>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>
                  Drop File Here or <b>Upload</b>
                  <br></br>
                  Photo must be in jpg,gif, or png Format, and no larger then
                  75MB in size
                </p>
              </div>
              {selectedImage && (
                <>
                  <div className="preview">
                    <img src={selectedImage} alt="Uploaded" />
                  </div>
                </>
              )}
              {/* </div> */}
              {/*  */}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>
                  <b>Description(Optional)</b>
                </label>
                <textarea
                  className="text_area"
                  rows="5"
                  placeholder="What’s Great about , this property"
                ></textarea>
                <span className="text_area_char_text">
                  7000 Characters Remaining
                </span>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3">
              <h3>
                <b>Rent Specials</b>
              </h3>
            </div>
            {/* {checkboxes.map((checkbox) => (
              <div key={checkbox.id} className="col-md-3 col-6 mb-3">
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                <span>{checkbox.label}</span>
              </div>
            ))} */}
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3">
              <h3>
                <b>Utilities Included</b>
              </h3>
            </div>
            {checkboxes.map((checkbox) => (
              <div key={checkbox.id} className="col-md-3 col-6 mb-3">
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                <span>{checkbox.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CondominiumDetails;
