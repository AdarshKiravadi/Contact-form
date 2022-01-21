import React from "react";
import "./grid.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Grid = ({ pre }) => {
 

  return (
    <div className="grid">
   
      <table id="formdata">
        <thead>
          <tr>
            <th>Name (Company)</th>
            <th>Lastname</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {pre.map((gridview) => (
            <tr>
              <td>
                {gridview.firstname},{gridview.company}
              </td>
              <td>{gridview.lastname}</td>
              <td>
                {gridview.address},{gridview.city},{gridview.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{float :"right"}}>
        { pre.length !==0 ? 
        <ReactHTMLTableToExcel
          table="formdata"
          filename="dataReport"
          sheet="sheet"
          buttonText="Export to CSV"
        /> : ""}
      </div>
    </div>
  );
};

export default Grid;
