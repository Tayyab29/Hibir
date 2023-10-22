import React from "react";
import { useState } from "react";

import { useDropzone } from "react-dropzone";

const GeneralPropertyInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Assuming you want to handle only one image
    const imageFile = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

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
              Photo must be in jpg,gif, or png Format, and no larger then 75MB
              in size
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
