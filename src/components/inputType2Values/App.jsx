import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "red"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input 
          type="text" 
          name = "firstName" 
          value = {this.state.firstName} 
          placeholder="First Name" 
          onChange={this.handleChange}/>
        <br/>
        <input 
          type="text" 
          name = "lastName" 
          value = {this.state.lastName} 
          placeholder="Last Name" 
          onChange={this.handleChange}/>

        <br/>
        <br/>
        <label>
        <input 
          type = "checkbox" 
          name = "isFriendly"
          checked = {this.state.isFriendly}
          onChange = {this.handleChange}
         /> Is Friend ? 
        </label>

        <br/>
        <label>
        <input 
          type = "radio" 
          name = "gender"
          checked = {this.state.gender === "male"}
          value = "male"
          onChange = {this.handleChange}
         /> Male 
        </label>

        <br/>

        <label>
        <input 
          type = "radio" 
          name = "gender"
          checked = {this.state.gender === "female"}
          value = "female"
          onChange = {this.handleChange}
         /> Female 
        </label>

        <br/>
        <label>Choose color: </label>
        <select 
          value = {this.state.favColor}
          onChange = {this.handleChange}
          name = "favColor"
        >
          <option value = "blue">Blue</option>
          <option value = "red">Red</option>
          <option value = "green">Green</option>
        </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2> You are a {this.state.gender}</h2>
        <h2>Best color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
  }

}

export default App