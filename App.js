import { useState } from "react";
import "./App.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

// I first started off by creating a simple and static form that contained the required input fields.
// As of now all these fields are static. So i need to make them dynamic by using React States.

function App() {
  // Have created one state named as InputFields. This has an object, with secveral different properties assigned to it.
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      jobtitle: "",
      emailAddress: "",
      website: "",
      linkedIn: "",
      personalSummary: "",
      projectTitle: "",
      projectDescription: "",
      GitHub: "",
      jobtitle2: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      companyName: "",
      institution: "",
      startDate2: "",
      endDate2: "",
      description: "",
    },
  ]);

  // This onChange event will run as soon as the user types something into the input fields.
  const handleFormChange = (index, event) => {
    //Created a variable named as 'data' which will store the inputFields state through the use of a spread operator ( ...)
    let data = [...inputFields];
    //Have targeted the index of data variable by using the index parameter as well as the name of the property.
    data[index][event.target.name] = event.target.value;
    //Used the setInputFields method for storing this data back inside the inputFields array.
    setInputFields(data);
  } 

  // This function Will be triggered as soon as the 'add' type buttons are clicked
  // In this function we have generated an object where every time the user clicks the add more buttons it will be pushed to the input Fields state. Therefore, creating a new input filed.  
  const addFields = (index) => {
    let newfield = {emailAddress: "",
    website: "",
    linkedIn: "",}
    setInputFields([...inputFields, newfield])
  }
// This function is used to view our data when the form is submitted.
// It logs/outputs the data from the input fields to the browsers console
  const submit = (e) => {
    //preventDefault() method prevents the date/page from getting refreshed.
    e.preventDefault();
    console.log(inputFields)
}

const removeFields = (index) => {
  let data = [...inputFields];
  // Spliced the variable data by index. Then store it in the inputFields state through the setInputFields.
  data.splice(index, 1)
  setInputFields(data)
}

  return (
    <div className="App">
        {/* Mapped the form fields from their inputFields state. */}
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              {/* Personal details section with fields such as Name, Job title/subtitle, Email address (optional), Phone number (optional), Website (optional), LinkedIn (optional), Personal summary. */}
              <form onSubmit={submit}>
              <div className="Personal Details">
                <h2>Personal details</h2>
                {/* The onChange event accepts 2 parameters (index and event).*/}
                {/* The Index parameter represents the index of the array whwereas the event parameter is the data the user types into the input field. We are then passing those two paramters to the handleFormChange function.*/}
                <input name="name" placeholder="Name" value={input.name} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <input name="jobtitle" placeholder="Job title/subtitle" value={input.jobtitle} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <input
                  name="emailAddress"
                  placeholder="Email address (optional)"
                  value={input.emailAddress}
                  onChange={event => handleFormChange(index, event)}
                />
                <br></br>
                <input name="website" placeholder="Website (optional)" value={input.website} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <input name="linkedIn" placeholder="LinkedIn (optional)" value={input.linkedIn} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <textarea
                  id="personalSummary"
                  name="personalSummary"
                  placeholder="Personal summary"
                  value={input.personalSummary}
                  onChange={event => handleFormChange(index, event)}
                  rows="4"
                  cols="50"
                ></textarea>
                <br></br>
              </div>
              </form>
              {/* These are the buttons for adding more form fields. */}
              <button onClick={addFields}>Add email address</button>
              <br></br>
              <br></br>
              <button onClick={addFields}>Add website</button>
              <br></br>
              <br></br>
              <button onClick={addFields}>Add LinkedIn</button>
              <br></br>
              <br></br>
              {/* Button for removing the added input fields */}
              <button onClick={() => removeFields(index)}>Remove</button>

              {/*with fields such as Project title, Project description, GitHub link (optional).*/}
              <form onSubmit={submit}>
              <div className="Projects">
                <h2>Projects</h2>
                <input name="projectTitle" placeholder="Project title" value={input.projectTitle} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Project description"
                  value={input.projectDescription}
                  onChange={event => handleFormChange(index, event)}
                  rows="4"
                  cols="50"
                ></textarea>
                <br></br>
                <input name="GitHub" placeholder="GitHub link (optional)" value={input.GitHub} onChange={event => handleFormChange(index, event)} />
                <br></br>
              </div>
              </form>
              <button onClick={addFields}>Add GitHub link</button>
              <br></br>
              <br></br>
              <button onClick={() => removeFields(index)}>Remove</button>

              <form onSubmit={submit}>
              {/* A work experience section with fields such as Date range worked (end range optional for ongoing study), Job title, Job description and Company name. */}
              <div className="Work Experience">
                <h2>Work Experience</h2>
                <input name="jobtitle2" placeholder="Job title" value={input.jobtitle2} onChange={event => handleFormChange(index, event)} />
                <br></br>
                <label for="dateRangeWorkedStart">Start date: </label>
                <input
                  type="date"
                  id="dateRangeWorkedStart"
                  name="startDate"
                  value={input.startDate}
                  onChange={event => handleFormChange(index, event)}
                ></input>
                <label for="dateRangeWorkedEnd">End date: </label>
                <input
                  type="date"
                  id="dateRangeWorkedEnd"
                  name="endDate"
                  value={input.endDate}
                  onChange={event => handleFormChange(index, event)}
                ></input>
                <br></br>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Job description"
                  value={input.jobDescription}
                  onChange={event => handleFormChange(index, event)}
                  rows="4"
                  cols="50"
                ></textarea>
                <br></br>
                <input name="companyName" placeholder="Company name" value={input.companyName} onChange={event => handleFormChange(index, event)} />
              </div>
              </form>

              <form onSubmit={submit}>
              {/* A Education section with fields such as Date range studied (end range optional for ongoing study), School/College/University/Bootcamp name, Description and Course title.  */}
              <div className="Education">
                <h2>Education</h2>
                <input
                  name="institution"
                  placeholder="School/college/university/bootcamp name"
                  value={input.institution}
                  onChange={event => handleFormChange(index, event)}
                />
                <br></br>
                <label for="dateRangeStart">Start date: </label>
                <input
                  type="date"
                  id="dateRangeStart"
                  name="startDate2"
                  value={input.startDate2}
                  onChange={event => handleFormChange(index, event)}
                ></input>
                <label for="dateRangeEnd">End date: </label>
                <input type="date" id="dateRangeEnd" name="endDate2" value={input.endDate2} onChange={event => handleFormChange(index, event)} ></input>
                <br></br>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={input.description}
                  onChange={event => handleFormChange(index, event)}
                  rows="4"
                  cols="50"
                ></textarea>
                <br></br>
                <input name="courseTitle" placeholder="Course title" value={input.courseTitle} onChange={event => handleFormChange(index, event)} />
              </div>
              </form>
            </div>
            
          );
        })}
        {/* Submit button */}
        <button class = "btn" onClick={submit}>Submit</button>
    </div>
    

  );
}
export default App; 
