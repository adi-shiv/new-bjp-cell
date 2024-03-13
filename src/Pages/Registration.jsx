import React  from "react";
import ad from '../images/images/logo.png'
import ani from "../images/images/sign.png";
import './Registration.css';
import { jsPDF } from "jspdf";

function Registration() {

  const jspdf = new jsPDF ('p','pt','letter')

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = e.target.adi.valve;

    const data = {
      callback:function(jspdf){
        jspdf.save('demo.pdf')
      },
      margin:[10,10,10,10],
    }
    jspdf.html(val,data)
  }

 
  return (
    <>
      <div className="adi" name="adi">
       
        <form onSubmit={(e)=>handleSubmit(e)} >
           
        <h2>MEMBERSHIP ID</h2>

          <label >Name:</label>
          <input type="text" id="Name" name="Name" required />
          <br />

          <label>Number:</label>
          <input type="phoneNumber" id="Phone Number" name="Phone Number" required />
          <br />
          <label>Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label>Age:</label>
          <input type="number" id="Number" name="Number" required />
          <br />
          <label>Qualification:</label>
          <input type="text" id="text" name="text" required />
          <br />
          <label>Address:</label>
          <textarea type='address' name="Address" id="Address" cols="30" rows="1"></textarea>
           
           <br />
          <div>
            <button className="new" type="submit" >
              Submit
            </button>
          </div>
        </form>

        <div id='ad'>
          <img src={ad} alt="" />
        </div>
        <div id="ani" >
          <img src={ani} alt="" />
        </div>
      </div>
    </>
  );
}

export default Registration;
