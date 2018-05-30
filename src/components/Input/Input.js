import React from 'react'
import classnames from 'classnames'

const Input = ({
  black,
  white,
  full,
  large,
  medium,
  text,
  onClick,
  value,
  ...props
}) => {
  const classes = classnames('input', {
    black,
    white,
    full,
    large,
    medium
  })

  return (
    <input
      type="text"
      className={classes}
      onClick={onClick}
      value={value}
      {...props} />
  )
}

export default Input
