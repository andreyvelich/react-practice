import React from "react"

const Header = () => {

  const headerStyle = {
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    textAlign: "center"
  }
  const imgStyle = {
    width: "250px"
  }
  const pStyle = {
    display: "inline",
    fontSize: "50px",
    fontFamily: "Courier New, bold",
    fontWeight: "bold"
  }

  return (
    <header style = {headerStyle}>
      <img style = {imgStyle} src = "http://www.stickpng.com/assets/thumbs/580b585b2edbce24c47b2a2c.png" alt="Hi?"/>
      <p style = {pStyle}>Mem Generator</p>
    </header>
  )
}

export default Header
