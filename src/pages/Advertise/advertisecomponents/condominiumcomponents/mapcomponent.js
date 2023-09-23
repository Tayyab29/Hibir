import React from "react";

const MapComponent = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.10063142015!2d-75.15008820724282!3d38.38795021655193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d671ac93de8b%3A0xb4bc715a3af31672!2sOcean%20City%2C%20MD%2C%20USA!5e0!3m2!1sen!2s!4v1693143288336!5m2!1sen!2s"
          style={{ width: "1290px", height: "300px" }}
        ></iframe>
      </div>
    </>
  );
};

export default MapComponent;
