import React from 'react'
import classnames from 'classnames'

const Button = ({
  black,
  white,
  text,
  onClick,
  ...props
}) => {
  const classes = classnames('button', {
    black,
    white
  })

  return (
    <button className={classes} {...props}>
      {text}
    </button>
  )
}

export default Button
