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
  className,
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
    <button className={`${className} ${classes}`} onClick={onClick} {...props}>
      {text}
    </button>
  )
}

export default Button
