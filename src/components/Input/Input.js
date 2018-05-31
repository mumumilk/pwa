import React from 'react'
import classnames from 'classnames'

const MODIFIER = 'input-group'

const Input = ({
  black,
  white,
  full,
  large,
  medium,
  text,
  onClick,
  onChange,
  value,
  label,
  id,
  ...props
}) => {
  const classes = classnames({
    [`${MODIFIER}--black`]: black,
    [`${MODIFIER}--white`]: white,
    [`${MODIFIER}--large`]: large,
    [`${MODIFIER}--medium`]: medium
  })

  return (
    <div className={`input-group ${classes}`}>
      <label className="input-group__label" htmlFor={id}>{label}</label>

      <input
        id={id}
        name={id}
        className="input-group__input"
        type="text"
        onClick={onClick}
        onChange={onChange}
        value={value}
        {...props} />
    </div>
  )
}

export default Input
