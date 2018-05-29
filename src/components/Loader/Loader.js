import React from 'react'

const Loader = ({
  text,
  ...props
}) => {
  return (
    <div className="loader" {...props}>
      <i className="loader__icon"></i>
      <div className="loader__description">{text}</div>
    </div>
  )
}

export default Loader
