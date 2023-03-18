import styles from "./Questions.css";
import React, { useState } from 'react';
import SearchBar from "./SearchBar";



function Questions () {
    const currentDate = new Date().toISOString().split('T')[0]; //to get current date
    const [mainCrime, setMainCrime] = useState("");
    const [subCrime, setSubCrime] = useState("");
    const [description, setDescription] = useState("");
    const [dateAnswer, setDateAnswer] = useState("");
    const [locationSelected, setLocationSelected] = useState("");
    const [anonymous, setAnonymous] = useState("");
    const [accurate, setAccurate] = useState("");
    const [consent, setConsent] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const mainCrimeOptions = [
        {value:"suspicious", label:"Suspicious activity or behaviour"},
        {value:"violent", label:"Violent crime"},
        {value:"harassment", label:"Harassment or hate crime"},
        {value:"drug", label:"Drug offence"},
        {value:"traffic", label:"Traffic incidents or violation"},
        {value:"property", label:"Property crime"},
        {value:"terrorism", label:"Terrorism"},
        {value:"other", label:"Other"}
    ];

    const subCrimeOptions = {
        "violent": [
            { value: "assault", label: "Assault" },
            { value: "sexual", label: "Sexual Offence" },
            { value: "gang", label: "Gang-related violence" },
            { value: "robbery", label: "Robbery" },
            { value: "stabbing", label: "Stabbing" },
            { value: "stalking", label: "Stalking" },
            { value: "kidnapping", label: "Kidnapping" },
            { value: "missingPerson", label: "Missing Person" },
            { value: "homicide", label: "Homicide" },
            { value: "otherViolent", label: "Other" },

        ],
        "harassment": [
            { value: "unspecified", label: "Unspecified" },
            { value: "race", label: "Race" },
            { value: "religion", label: "Religion" },
            { value: "gender", label: "Gender" },
            { value: "sexualOrientation", label: "Sexual Orientation" },
            { value: "otherHarassment", label: "Other" }
        ],
        "drug": [
            { value: "possessionDrug", label: "Possession of illegal drugs" },
            { value: "saleDrug", label: "Sale of illegal drugs" },
            { value: "transportDrug", label: "Transportation of illegal drugs" },
            { value: "otherDrug", label: "Other" }
        ],
        "traffic": [
            { value: "accident", label: "Driving accident" },
            { value: "hitRun", label: "Hit and run accident" },
            { value: "reckless", label: "Reckless driving" },
            { value: "speeding", label: "Speeding" },
            { value: "underInfluence", label: "Driving under influence" },
            { value: "otherTraffic", label: "Other" }
        ],
        "property": [
            { value: "burglary", label: "Burglary" },
            { value: "theft", label: "Theft" },
            { value: "propertyRobbery", label: "Robbery (using force or threat)" },
            { value: "vandalism", label: "Vandalism" },
            { value: "arson", label: "Arson" },
            { value: "trespassing", label: "Trespassing" },
            { value: "otherProperty", label: "Other" }
        ]
    };

    function handleMainCrimeChange (e) {
        console.log(e.target.value);
        setMainCrime(e.target.value);
        
        if (e.target.value==="suspicious") {
            setSubCrime("suspicious");
        } 
        else if (e.target.value==="terrorism") {
            setSubCrime("terrorism");
        }
        else  {
            setSubCrime("");
        }
    }

    const selectedOption = mainCrimeOptions.find((option) => option.value === mainCrime);
    const selectedLabel = selectedOption ? selectedOption.label: "";

    function handleChange(setter) {
        return function(e) {
          setter(e.target.value);
          console.log(e.target.value);
        };
    }

    function handleCheckbox(setter) {
        return function(e) {
            setter(e.target.checked);
            console.log(e.target.checked);
        }
    }

    const handleSubCrimeChange = handleChange(setSubCrime);
    const handleDateAnswerChange = handleChange(setDateAnswer);
    const handleDescriptionChange = handleChange(setDescription);
    const handleLocationChange = handleChange(setLocationSelected);
    const handleAnonymousChange = handleCheckbox(setAnonymous);
    const handleAccurateChange = handleCheckbox(setAccurate);
    const handleConsentChange = handleCheckbox(setConsent);

    function renderMainCrimeError () {
        if(formSubmitted && !mainCrime) {
            return <p className="errorMessage">Please select an option.</p>
        }
        return null;
    }

    function renderSubCrimeError () {
        if(formSubmitted && !subCrime) {
            return <p className="errorMessage">Please select the most appropriate option.</p>
        }
        return null;
    }

    function renderDesciptionError () {
        if(formSubmitted && !description) {
            return <p className="errorMessage">Please provide a description.</p>
        }
        return null;
    }

    function renderDateError () {
        if(formSubmitted && !dateAnswer) {
            return <p className="errorMessage">Please enter the date of the crime or incident.</p>
        }
        return null;
    }

    function renderLocationError () {
        if(formSubmitted && !locationSelected) {
            return <p className="errorMessage">Please enter a location.</p>
        }
        return null;
    }

    function renderTCError () {
        if(formSubmitted && (!consent || !accurate)) {
            return <p className="errorMessage">Please make sure you have ticked the boxes below to submit your report.</p>
        }
        return null;
    }

    function submitForm () {
        setFormSubmitted(true);
      
        // Check if all required fields have been filled out
        if (mainCrime && subCrime && description && dateAnswer && locationSelected && accurate && consent)  {
          const form = {
            reportMainCrime : mainCrime,
            reportSubCrime : subCrime,
            reportDescription: description,
            reportDate: dateAnswer,
            reportLocation: locationSelected,
            reportAnonymous: anonymous,
            reportAccurate: accurate,
            reportConsent: consent
          }
          console.log(form);
        } else {
          console.log("Error: Please fill out all required form fields");
        }
      }

    return(
        
        <div className="userQuestions">
            <h2 className="question1" >Please select the type of crime or incident you are reporting:</h2>
            {renderMainCrimeError()}

            <div onChange={handleMainCrimeChange}>
                {mainCrimeOptions.map(option => (
                    <React.Fragment key={option.value}>
                        <input 
                            type="radio" 
                            value={option.value} 
                            name="mainCrime"
                        /> {option.label} <br />
                    </React.Fragment>
                ))}
            </div>
            
            {mainCrime in subCrimeOptions ?          
            <div onChange={handleSubCrimeChange}>
                <h2>Please choose the category that most closely matches the type of {selectedLabel.toLowerCase()}:</h2>
                {renderSubCrimeError()}
                {subCrimeOptions[mainCrime].map(option => (
                    <React.Fragment key={option.value}>
                        <input 
                            type="radio" 
                            value={option.value} 
                            name="subCrime" 
                        /> {option.label} <br />
                    </React.Fragment>
                ))}
            </div> 
             : null}
            <h2 className="question2" >Please provide a detailed account of the crime or incident:</h2>
            {renderDesciptionError()}
            <textarea 
                type="text" 
                className="descriptionAnswer"
                onChange={handleDescriptionChange}/>
            

            <h2 className="question3" >When did this happen?</h2>
            {renderDateError()}
            <input 
                type="date" 
                className="dateAnswer" 
                max={currentDate}
                onChange={handleDateAnswerChange}/>

            <h2 className="question4" >Where did this happen?</h2>
            {renderLocationError()}
            <div className="searchBarContainer">
                <SearchBar 
                    placeholder="Enter Location" 
                    width={960}
                    onChange={handleLocationChange}/> 
            </div>
            <a className="currentLocationLink" href = "/#">Use current location</a>
            <button className="mapImg">MAP</button>

            <div className="formCheckboxes" >
                <input type="checkbox" value="true" name="anonymous" onChange={handleAnonymousChange}/>Do you wish to remain anonymous when submitting this form?<br/>
                {renderTCError()}
                <input type="checkbox" value="true" name="accurateTicked" onChange={handleAccurateChange} />I confirm that all information I have provided is truthful and accurate to the best of my knowledge.*<br/>
                <input type="checkbox" value="true" name="consentTicked" onChange={handleConsentChange} />I give consent for the information provided in this report to be collected, shared and stored. For more information, please refer to our Privacy Policy. *<br/>
            </div>
            
            <div className="pageButtons">
                <button className="cancelButton">Cancel</button>
                <button onClick={submitForm} className="submitButton">Submit</button>
            </div>

        </div>
       
    )
        
}

export default Questions;