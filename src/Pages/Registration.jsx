import React  from "react";
// import ad from "../../images/logo.png";
// import ani from "../../images/sign.png";
import './Registration.css';

function Registration() {
 
  return (
    <>
      <div className="adi">
        <h2>MEMBERSHIP ID</h2>
        <form>
          <label>Name:</label>
          <input type="text" id="Name" name="Name" required />
          <br />

          <label>Number:</label>
          <input type="Phone Number" id="Phone Number" name="Phone Number" required />
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
          <textarea name="Address" id="Address" cols="30" rows="1"></textarea>
           
           <br />
          <div>
            <button className="new" type="submit" >
              Submit
            </button>
          </div>
        </form>

        {/* <div id='ad'>
          <img src={ad}  />
        </div>
        <div id="ani" >
          <img src={ani}  />
        </div> */}
      </div>
    </>
  );
}

export default Registration;
