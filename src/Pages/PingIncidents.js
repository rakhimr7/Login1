import React from 'react';
import styles from '../Pages/StylesPages/PingIncidents.css';
import Navbar from "../components/mainNavbar";
import Questions from "../components/Questions";
import {useNavigate} from 'react-router-dom';

function PingIncidents() {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div>
    <head>
      {/*google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,400;1,500;1,600&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"/>

      {/* google search icon   */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    
      {/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"/> */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous"/> */}
    </head>
    <body>
      <Navbar/>
      <div className="pingIncidentsHeader">
          <a className="backButton" href="#" onClick={goBack}>&lt; back</a>
          <h1 className="formTitle" >Report a crime or incident</h1>
      </div>
      <Questions/>
    </body>
      
    </div>
  )
}



export default PingIncidents;
