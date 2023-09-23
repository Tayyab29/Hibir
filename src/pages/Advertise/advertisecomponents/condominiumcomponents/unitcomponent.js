import React from "react";
import { BsInfoCircle, BsPlus } from "react-icons/bs";

const UnitComponent = () => {
  //   const [selectedDate, setSelectedDate] = useState("");

  //   const handleDateChange = (event) => {
  //     const selectedDateValue = event.target.value;
  //     setSelectedDate(selectedDateValue);
  //   };
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
                  <input type="number" className="input_tbl" placeholder="2" />
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
                  <input type="number" className="input_tbl" placeholder="2" />
                </td>
                <td>
                  <input type="number" className="input_tbl" placeholder="2" />
                </td>
                <td>
                  <input type="number" className="input_tbl" placeholder="2" />
                </td>
                <td>
                  <input type="number" className="input_tbl" placeholder="2" />
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
  );
};

export default UnitComponent;
