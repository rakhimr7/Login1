import React from 'react';
import Navbar from "../components/mainNavbar";
import styles from '../Pages/StylesPages/EmergencyPage.css';
import { Link } from 'react-router-dom';

function EmergencyPage() {
  return (
    <div>
      <head>
        {/*google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,400;1,500;1,600&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"/>

        {/* google search icon   */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
      </head>
      <body>
      <Navbar/>
      <div className="emergencyMessage">
        <p>If there’s an crime or emergency happening right now, please call 999 or your local emergency services.  Click <a href="/emergency-contacts">here</a> for the emergency contact information.</p>
        <h2>For non-urgent crime and incidents, please click the button below.</h2>
          <div className="nextPageButton">
            <Link to="/ping-incidents">
                <button>Report to StreetLine</button>
            </Link>
          </div>
      </div>
      
      </body>
      
    </div>
  )
}

export default EmergencyPage;
