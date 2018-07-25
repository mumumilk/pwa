import React from 'react'

const Loader = ({
  text,
  ...props
}) => {
  return (
    <div className="loader" {...props}>
      <i className="loader__icon icon--loading"></i>
      <p className="loader__description">{text}</p>
    </div>
  )
}

export default Loader
