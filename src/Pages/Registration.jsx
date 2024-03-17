import React, { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Registration.css";
import ad from "../images/images/logo.png";
import ani from "../images/images/sign.png";

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 20, 190, 100);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  render() {
    return (
      <div>
        <div id="divToPrint" className="mt4">
          <div className="mem">
            <h2>MEMBERSHIP ID</h2>
          </div>
          <div className="adi">
            <form className="red">
              <label>Name:</label>
              <input type="text" id="Name" name="Name" required />
              <br />
              <label>Number:</label>
              <input
                type="Phone Number"
                id="Phone Number"
                name="Phone Number"
                required
              />
              <br />
              <label>Email:</label>
              <input type="email" id="email" name="email" required />
              <br />
              <label>Age:</label>
              <input type="Number" id="Number" name="Number" required />
              <br />
              <label>Qualification:</label>
              <input type="text" id="text" name="text" required />
              <br />
              <label>Address:</label>
              <textarea
                name="Address"
                id="Address"
                cols="30"
                rows="1"
              ></textarea>
            </form>

            <div className="logo-img">
              <div id="ad">
                <img src={ad} />
              </div>

              <div id="ani">
                <img src={ani} />
              </div>
            </div>
          </div>
        </div>
        <div className="print-btn">
          <button className="print" onClick={this.printDocument}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
