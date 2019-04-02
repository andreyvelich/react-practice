import React from "react"


const FormComponent = (props) => {

  return ( 
    <form>
      <input 
        placeholder = "First Name" 
        value={props.data.firstName} 
        onChange = {props.handleChange}
        name = "firstName"
      /><br/>
      <input 
        placeholder = "Last Name" 
        value={props.data.lastName} 
        onChange = {props.handleChange}
        name = "lastName"
      /><br/>
      <input 
        placeholder = "Age" 
        value={props.data.age} 
        onChange = {props.handleChange}
        name = "age"
      /><br/>
      Choose you gender <br/>
      <input 
        type = "radio" 
        name = "gender"
        value = "Male"
        onChange = {props.handleChange}
        checked = {props.data.gender === "Male"}
      /> Male <br/>
      <input 
        type = "radio" 
        name = "gender"
        value = "Female"
        onChange = {props.handleChange}
        checked = {props.data.gender === "Female"}
      /> Female <br/>
      <br/>
      <label>Choose your location</label>
      <select name = "location" value = {props.data.location} onChange = {props.handleChange}>
        <option value = "Moscow">Moscow</option>
        <option value = "Paris">Paris</option>
        <option value = "London">London</option>
      </select>
  
      <br/>
      <h4>Choose your dietary</h4>
      <input 
        type = "checkbox" 
        name = "isVegan" 
        onChange = {props.handleChange}
        checked = {props.data.dietaryRestr.isVegan}/> 
          Vegan  <br/>
      <input 
        type = "checkbox" 
        name = "isNonGMO" 
        onChange = {props.handleChange}
        checked = {props.data.dietaryRestr.isNonGMO}
      /> NonGMO <br/>
      <input 
        type = "checkbox" 
        name = "isKosher" 
        onChange = {props.handleChange} 
        checked = {props.data.dietaryRestr.isKosher}
      /> Kosher <br/>
  
  
      <h1>Entered info:</h1>
      <h2>Your name: {props.data.firstName} {props.data.lastName}</h2>
      <h2>Your age: {props.data.age}</h2>
      <h2>Your gender: {props.data.gender}</h2>
      <h2>Your location: {props.data.location}</h2>
        Your diet: 
        <p>Vegan: {props.data.dietaryRestr.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.data.dietaryRestr.isKosher ? "Yes" : "No"}</p>
        <p>NonGMO: {props.data.dietaryRestr.isNonGMO ? "Yes" : "No"}</p>
    </form>
)
  }

export default FormComponent
