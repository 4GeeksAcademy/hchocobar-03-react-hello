import React from "react"; // 1
import PropTypes from "prop-types";

// 5 y 2
export const Title = (props) => {
  // 3 Code JS
  
  // 4
  return (
    <h1 className={`text-center mt-2 text-${props.color}`}>{props.text}</h1>
  )

}


Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

Title.defaultProps = {
  text: 'Title',
  color: "primary"
}