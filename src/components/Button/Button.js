import React from 'react'
import classnames from 'classnames'

const Button = ({
  black,
  white,
  full,
  large,
  medium,
  text,
  onClick,
  ...props
}) => {
  const classes = classnames('button', {
    black,
    white,
    full,
    large,
    medium
  })

  return (
    <button className={classes} {...props}>
      {text}
    </button>
  )
}

export default Button
