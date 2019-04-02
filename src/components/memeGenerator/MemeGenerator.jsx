import React from "react"


class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }
  getNewMem = (event) => {
    event.preventDefault()
    console.log(this.state.allMemeImgs)
    const newRandomImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
    console.log(newRandomImg)
    this.setState({randomImg: newRandomImg})
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }
  render() {
    const buttonStyles = {
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      fontSize: "40px",
      padding: "15px 32px",
      fontFamily: "Whitney SSm A",
      marginTop: "30px"
    }
    const inputStyle = {
      fontSize: "30px",
      marginTop: "40px",
      fontFamily: "Courier New, bold"
    }
    const formStyle = {
      textAlign: "center"
    }
    const topTextStyle = {
      marginTop: "-320px",
      fontFamily: "impact",
      fontSize: "2.5em",
      color: "white",
      textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000, 2px 2px 5px #000",
      textTransform: "uppercase"
    }
    const bottomTextStyle = {
      marginTop: "200px ",
      fontFamily: "impact",
      fontSize: "2.5em",
      color: "white",
      textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000, 2px 2px 5px #000",
      textTransform: "uppercase"
    }
    const divStyle = {
      textAlign: "center",
      marginTop: "40px",
      width: "90%",
      position: "relative"
    }
    const imgStyle = {
      width: "100%"
    }

    return (
      <div>
        <form style = {formStyle} onSubmit = {this.getNewMem}>

          <input 
            style = {inputStyle}
            type = "text"
            name = "topText"
            value = {this.state.topText}
            onChange = {this.handleChange}
            placeholder = "Top Text"
          />
        
          <input 
            style = {inputStyle}
            type = "text"
            name = "bottomText"
            value = {this.state.bottomText}
            onChange = {this.handleChange}
            placeholder = "Buttom Text"
          />
          <br/>
          <button style = {buttonStyles}>Generate</button>
          
        </form>
        <div style = {divStyle}>
          <img style = {imgStyle} src = {this.state.randomImg} alt = ""/>
          <h2 style = {topTextStyle}>{this.state.topText}</h2>
          <h2 style = {bottomTextStyle}>{this.state.bottomText}</h2>
        </div>
        
      </div>
    )
  }
}

export default MemeGenerator