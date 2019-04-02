import React from "react"


const buttonStyle = {
  fontSize: "16px"
}
const divStyle = {
  margin: "auto",
  width: "60%",
  padding: "10px",
}

class App extends React.Component {
  
  

  constructor() {
    super()
    this.state = {
      isLogin: false
    }
    this.changeLogStatus = this.changeLogStatus.bind(this)
    
  }
  changeLogStatus() {
    this.setState(previous => {
      return {
        isLogin: !previous.isLogin
      }
    })
    console.log(this.state.isLogin)
  }





  render() {
    
    return (
      <div style = {divStyle}>
        <h1>{this.state.isLogin ? "User is LogIn": "User is LogOut"}</h1>
        <button onClick = {this.changeLogStatus} 
                style={buttonStyle}>
        {this.state.isLogin ? "LogOut": "LogIn"}
        </button>
      </div>
    )
  }
}



export default App