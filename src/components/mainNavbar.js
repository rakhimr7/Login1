import styles from "./mainNavbar.css";
import { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDashboard, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
library.add(faDashboard,faUser, faCog, faSignOutAlt);


function Navbar() {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target) &&
            !e.target.classList.contains("myAccount")) {
                setShowDropDownMenu(false);
                console.log(menuRef.current);
            }
            
        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        };

    },[showDropDownMenu]);

    return (
        <header className="navbarHeader">
            <div className="logoDiv">
                <a href = "/homepage">
                    <img className="logoBody" src="./Images/LogoBodyIcon.svg" alt="Logo"/> 
                    <img className="logoEclipse" src="./Images/LogoEclipse.svg" alt="Ring"/>  
                </a> 
                <a className ="logoTitle" href = "/homepage">STREETLINE</a>
            </div>

            <nav className="navbar">
                <div className="navbarDiv">
                    <SearchBar placeholder="Search Location" width={340}/>
                    <a className="navLink" href = "/emergency-page">Report Incident</a>
                    <a className = "navLink" href = "/emergency-contacts">Contact</a>
                        <div className="myAccountDiv">
                            <button 
                                onClick = {() => { 
                                    console.log(showDropDownMenu); 
                                    setShowDropDownMenu(!showDropDownMenu);
                                }} 
                            className="myAccount"> My Account</button>
                            <ul ref={menuRef} className = {`dropDownMenu ${showDropDownMenu ? "": "dropDownMenuInvisible" }`} >
                                {/* <li><FontAwesomeIcon icon={faDashboard} /><a href = "/#">Dashboard</a></li> */}
                                <li><a href = "/#">Dashboard</a></li>
                                <li><a href = "/#">View Saved Location</a></li>
                                <li><a href = "/#">Account Settings</a></li>
                                <li><a href = "/#">Log Out</a></li>
                            </ul>
                        </div>
                </div>
            </nav>
        </header>
     );
}







export default Navbar;