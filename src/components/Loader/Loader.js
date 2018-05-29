import React from 'react'

const Loader = ({
  text,
  ...props
}) => {
  return (
    <div className="loader" {...props}>
      <span className="loader__icon"></span>
      <div className="loader__description">{text}</div>
    </div>
  )
}

export default Loader
