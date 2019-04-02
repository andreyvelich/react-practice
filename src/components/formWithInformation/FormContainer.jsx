import React from "react"
import FormComponent from "./FormComponent"


class FormContainer extends React.Component {
  constructor() {
    super()
    this.state =  {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",  
      dietaryRestr: {
        isVegan: false,
        isKosher: false,
        isNonGMO: false
      }    

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(this.state)
    const {name, value, type, checked} = event.target
    console.log(checked)
    console.log(name)
    type === "checkbox" ? this.setState(previous => {
      return {
        dietaryRestr: {
          ...previous.dietaryRestr,
          [name]: checked
        }
      }
    }) : this.setState({[name]: value})
  }

  render() {
    return (
    <FormComponent
      handleChange = {this.handleChange}
      data = {this.state}
    />
    )
  }
}

export default FormContainer