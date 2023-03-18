import React from 'react';
import Navbar from "../components/mainNavbar";
import styles from '../Pages/StylesPages/Help.css';
function Help() {
  return (
    <body>
      <Navbar />

      <div className="Help">




        <div className="LeftSide">
          <h1>Contact EmengercyLine</h1>
          <p>Email us at -
            <button>
              StreetLineEmail@address.com
            </button>
          </p>
          <p>Call police -
            <button>
              999
            </button>
          </p>
          <p>Report an issue within our app -
            <button>
              Report
            </button>
          </p>
          <p>Help</p>


        </div>

        <div className="RightSide">


          <h1>Contact StreetLine</h1>
          <form id="Contact-form" method="POST">
          </form >

          <label htmlfor="email" Email></label>
          <input name="email" placeholder="Enter Email" type="text" />
          <label htmlfor="Emengercy" Message></label>
          <textarea
            rows="6" placeholder="Send message"
            name="message" required></textarea>
          <button type="submit">Send Message</button>

        </div >
      </div>
    </body>
  )
}

export default Help;
