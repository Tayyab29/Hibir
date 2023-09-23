import React from "react";

const RecentSpecial = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Rent Specials</b>
          </h3>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rest Special Tilte</b>
              </label>
              <div>
                <input
                  type="text"
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rest Special Start</b>
              </label>
              <div>
                <input
                  type="date"
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rest Special End</b>
              </label>
              <div>
                <input
                  type="date"
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>
              <b>Rest Special Description(Optional)</b>
            </label>
            <textarea className="text_area" rows="5" placeholder=""></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSpecial;
