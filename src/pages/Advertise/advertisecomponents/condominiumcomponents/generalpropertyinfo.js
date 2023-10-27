import React, { useContext } from "react";
import { useState } from "react";

import { useDropzone } from "react-dropzone";
import { ToastContext } from "../../../../context/toast";
import { advertiseFileUpload } from "../../../../services/advertise";
import axios from "axios";

const GeneralPropertyInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [formAttachment, setFormAttachment] = useState([]);

  // Context
  const toast = useContext(ToastContext);

  const onDrop = async (acceptedFiles) => {
    try {
      // setIsFormNotEmpty(true);
      // setUploadingAttachment(true);

      const url = process.env.REACT_APP_BASE_URL;

      let _attachments = [...formAttachment];
      let files = [...acceptedFiles];
      const totalFiles = _attachments.length + files.length;
      if (totalFiles > 4) {
        toast.showMessage("Error", "Maximum Four(4) Files allowed", "error");
        files = null;
        return;
      }

      // CHECKING FILES TYPES && It's File Size
      for (let file of files) {
        if (file.size > 3145728) {
          toast.showMessage("Error", "Maximum 3 MB per file allowed", "error");
          files = null;
          return;
        }
        if (
          !file.name.endsWith(".jpg") &&
          !file.name.endsWith(".png") &&
          !file.name.endsWith(".jpeg") &&
          !file.name.endsWith(".gif")
        ) {
          toast.showMessage("Error", "Invalid File - Please import an Image file", "error");

          // setUploadingAttachment(false);
          files = null;
          return;
        }
      }
      // CHECKING SAME FILE
      if (_attachments.length > 0) {
        const namesArray = _attachments.map((item) => item.name);
        const filtered = files.filter((item) => !namesArray.includes(item.name));
        if (filtered.length === 0) {
          toast.showMessage("Error", "File(s) already exists.", "error");

          files = null;
          // setDataLoading(false);
          return;
        }
      }

      // UPLOADING FILES
      const formData = new FormData();
      formData.append(`_id`, "65396068100d696567559a27");
      formData.append(`index`, 0);
      for (let file of files) {
        console.log({ file });
        formData.append(`attachments`, file);
      }
      const res = await axios.post(`${url}advertise/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct content type
        },
      });
      if (res.data.status) {
        setFormAttachment(res.data.upload);
        toast.showMessage("Success", "File(s) uploaded succesfully.", "success");
      } else {
        toast.showMessage("Error", "File(s) uploading failed.", "error");
      }
      files = null;
      // setUploadingAttachment(false);
    } catch (error) {
      // setUploadingAttachment(false);
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });
  // console.log({ formAttachment });

  return (
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
              Photo must be in jpg,gif, or png Format, and no larger then 2MB in size
            </p>
          </div>
          {/* {selectedImage && (
            <>
              <div className="preview">
                <img src={selectedImage} alt="Uploaded" />
              </div>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default GeneralPropertyInfo;
