import React, { useContext, useEffect, useState } from "react";
import { BsImages, BsInfoCircle, BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  mainViewState,
  onAdvertiseMultiValidate,
  onFormAdvertiseDataChange,
} from "../../../../redux/main-view";
import CustomInput from "../../../../ui-components/custominput";
import { ToastContext } from "../../../../context/toast";
import axios from "axios";

const initialValidationState = {
  sizeSqft: false,
  rent: false,
  deposit: false,
  leaseLength: false,
  availableDate: false,
  images: false,
};

const UnitComponent = ({ uploadedImages }) => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const [formArray, setFormArray] = useState([
    {
      sizeSqft: "",
      rent: "",
      deposit: "",
      leaseLength: "",
      availableDate: "",
      validations: {
        ...initialValidationState,
      },
    },
  ]);

  const [formAttachment, setFormAttachment] = useState([]);
  const [uploadngAttachment, setUploadingAttachment] = useState(false);

  // Context
  const toast = useContext(ToastContext);

  const inputHandler = (e, index) => {
    const { name, value } = e.target;
    const _formArray = screens.advertise.multiValidate;
    const localRedux = [..._formArray];

    const updatedFormArray = [...formArray];
    // Create a new object for the specific index
    const updatedItem = {
      ...updatedFormArray[index],
      [name]: value,
      validations: {
        ...updatedFormArray[index].validations,
        [name]: false,
      },
    };

    const reduxItem = {
      ...localRedux[index],
      [name]: value,
      validations: {
        ...localRedux[index].validations,
        [name]: false,
      },
    };

    // Update the array with the new object
    updatedFormArray[index] = updatedItem;
    localRedux[index] = reduxItem;
    // updatedFormArray[index][name] = value;
    // updatedFormArray[index].validations[name] = true;

    setFormArray(updatedFormArray);
    const dummysizeSqft = [];
    const dummyrent = [];
    const dummydeposit = [];
    const dummyleaseLength = [];
    const dummyavailableDate = [];
    updatedFormArray.forEach((item) => {
      const { sizeSqft, rent, deposit, leaseLength, availableDate } = item;
      dummysizeSqft.push(sizeSqft);
      dummyrent.push(rent);
      dummydeposit.push(deposit);
      dummyleaseLength.push(leaseLength);
      dummyavailableDate.push(availableDate);
    });
    let updated = [...localRedux];
    // let updated = [...updatedFormArray];

    dispatch(onAdvertiseMultiValidate(updated));

    dispatch(
      onFormAdvertiseDataChange({
        ...screens.advertise.data,
        sizeSqft: dummysizeSqft,
        rent: dummyrent,
        deposit: dummydeposit,
        leaseLength: dummyleaseLength,
        availableDate: dummyavailableDate,
      })
    );
  };

  useEffect(() => {
    const object = {
      sizeSqft: "",
      rent: "",
      deposit: "",
      leaseLength: "",
      availableDate: "",
      validations: {
        ...initialValidationState,
      },
    };

    const temp = [...formArray];
    for (let i = 1; i < screens?.advertise?.data?.propertyBeds.length; i++) {
      temp.push({ ...object });
    }
    setFormArray(temp);
    dispatch(onAdvertiseMultiValidate(temp));
  }, [screens?.advertise?.data?.propertyBeds]);

  const onFileChange = async (e, index) => {
    try {
      // setIsFormNotEmpty(true);
      setUploadingAttachment(true);

      const url = process.env.REACT_APP_BASE_URL;
      const advertiseId = screens.advertise?.data?._id;

      let _attachments = [...formAttachment];
      let files = [...e.target.files];

      const totalFiles = _attachments[index].images.length + files.length;
      if (totalFiles > 4) {
        toast.showMessage("Error", "Maximum Four(4) Files allowed", "error");
        files = null;
        setUploadingAttachment(false);

        return;
      }

      // CHECKING FILES TYPES && It's File Size
      for (let file of files) {
        if (file.size > 3145728) {
          toast.showMessage("Error", "Maximum 3 MB per file allowed", "error");
          files = null;
          e.target.value = null;
          setUploadingAttachment(false);

          return;
        }
        if (
          !file.name.endsWith(".jpg") &&
          !file.name.endsWith(".png") &&
          !file.name.endsWith(".jpeg") &&
          !file.name.endsWith(".gif")
        ) {
          toast.showMessage("Error", "Invalid File - Please import an Image file", "error");

          setUploadingAttachment(false);
          e.target.value = null;
          files = null;
          return;
        }
      }
      // CHECKING SAME FILE
      if (_attachments[index].images.length > 0) {
        const namesArray = _attachments[index].images.map((item) => item.fileName);
        const filtered = files.filter((item) => !namesArray.includes(item.name));
        if (filtered.length === 0) {
          toast.showMessage("Error", "File(s) already exists.", "error");
          files = null;
          e.target.value = null;
          setUploadingAttachment(false);
          return;
        }
        files = filtered;
      }

      // UPLOADING FILES
      const formData = new FormData();
      formData.append(`_id`, advertiseId);
      // formData.append(`_id`, "65396068100d696567559a27");
      formData.append(`index`, index);
      for (let file of files) {
        formData.append(`attachments`, file);
      }
      const res = await axios.post(`${url}advertise/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct content type
        },
      });
      if (res.data.status) {
        _attachments[index].images = res.data.upload;
        setFormAttachment(_attachments);
        // setFormAttachment(res.data.upload);
        toast.showMessage("Success", "File(s) uploaded succesfully.", "success");
      } else {
        toast.showMessage("Error", "File(s) uploading failed.", "error");
      }
      setUploadingAttachment(false);
      e.target.value = null;
      files = null;
    } catch (error) {
      setUploadingAttachment(false);
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  useEffect(() => {
    for (let i = 0; i < screens?.advertise?.data?.propertyBeds.length; i++) {
      formAttachment.push({ images: [] });
    }
  }, [screens?.advertise?.data?.propertyBeds]);

  return (
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
                {screens.advertise.data.propertyNames.length === 0 ? (
                  <></>
                ) : (
                  <th>
                    Name <BsInfoCircle className="info_hov" />
                  </th>
                )}
                <th>Beds</th>
                <th>Baths</th>
                <th>Sq.Ft.</th>
                <th>Rent</th>
                <th>Deposit</th>
                <th>Lease Length</th>
                <th>Available On</th>
              </tr>
            </thead>
            {screens.advertise.data.propertyBeds.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>
                      <span>
                        <BsImages /> &nbsp;{" "}
                        {formAttachment[index]?.images.length === 0
                          ? uploadedImages
                            ? uploadedImages[index] + " " + "Files"
                            : "jpg,png,jpeg"
                          : formAttachment[index]?.images.length + " " + "Files"}
                      </span>
                      <input
                        type="file"
                        multiple
                        id={`file-upload-${index}`}
                        name={index}
                        accept={" .png, .jpg, .jpeg"}
                        style={{ display: "none" }}
                        onChange={(e) => onFileChange(e, index)}
                      />

                      {uploadngAttachment ? (
                        <p className="picture_btn">Uploading</p>
                      ) : (
                        <label className="picture_btn" htmlFor={`file-upload-${index}`}>
                          Upload Picture
                        </label>
                      )}
                    </td>
                    {screens.advertise.data.propertyNames.length === 0 ? (
                      <></>
                    ) : (
                      <td>
                        <CustomInput
                          type="text"
                          className="input_tbl"
                          placeholder="Unit Name"
                          value={screens.advertise.data.propertyNames[index]}
                          disabled={true}
                        />
                      </td>
                    )}

                    <td>
                      <CustomInput
                        type="text"
                        className="input_tbl"
                        placeholder="Beds"
                        value={screens.advertise.data.propertyBeds[index]}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <CustomInput
                        type="text"
                        className="input_tbl"
                        placeholder="Baths"
                        value={screens.advertise.data.propertyBaths[index]}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <CustomInput
                        type="text"
                        name="sizeSqft"
                        className="input_tbl"
                        placeholder="Enter"
                        value={screens.advertise.data.sizeSqft[index]}
                        onChange={(e) => inputHandler(e, index)}
                        maxLength={6}
                      />
                      {screens.advertise.multiValidate[index]?.validations.sizeSqft && (
                        <small className="p-error">Required</small>
                      )}
                    </td>
                    <td>
                      <CustomInput
                        type="text"
                        name="rent"
                        className="input_tbl"
                        placeholder="Enter"
                        value={screens.advertise.data.rent[index]}
                        onChange={(e) => inputHandler(e, index)}
                        maxLength={6}
                      />
                      {screens.advertise.multiValidate[index]?.validations.rent && (
                        <small className="p-error">Required</small>
                      )}
                    </td>
                    <td>
                      <CustomInput
                        type="text"
                        name="deposit"
                        className="input_tbl"
                        placeholder="Enter"
                        value={screens.advertise.data.deposit[index]}
                        onChange={(e) => inputHandler(e, index)}
                        maxLength={6}
                      />
                      {screens.advertise.multiValidate[index]?.validations.deposit && (
                        <small className="p-error">Required</small>
                      )}
                    </td>
                    <td>
                      <CustomInput
                        type="text"
                        name="leaseLength"
                        className="input_tbl"
                        placeholder="Enter"
                        value={screens.advertise.data.leaseLength[index]}
                        onChange={(e) => inputHandler(e, index)}
                        maxLength={30}
                      />
                      {screens.advertise.multiValidate[index]?.validations.leaseLength && (
                        <small className="p-error">Required</small>
                      )}
                    </td>
                    <td>
                      <input
                        type="date"
                        name="availableDate"
                        className="input_tbl"
                        placeholder="mm/dd/yyyy"
                        value={screens.advertise.data.availableDate[index]}
                        onChange={(e) => inputHandler(e, index)}
                        // value={selectedDate}
                        // onChange={handleDateChange}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      {screens.advertise.multiValidate[index]?.validations.availableDate && (
                        <small className="p-error">Required</small>
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        {/* <div className="pt-2 add_another_style">
          <BsPlus className="plus_icon" /> <span>Add Another Units</span>
        </div> */}
      </div>
    </div>
  );
};

export default UnitComponent;
