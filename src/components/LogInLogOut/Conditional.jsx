import React from "react"

const Conditional = (props) => {
  if (props.isLoading) {
    return (
      <h1>Is Loading</h1>
    )
  }
  else {
    return (
    <h1>Loading finish</h1>
    )
  }
}

export default Conditional
