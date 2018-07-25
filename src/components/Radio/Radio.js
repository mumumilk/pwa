import React from 'react'
import classnames from 'classnames'

const MODIFIER = 'radio-group'

const Radio = ({
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
  name,
  ...props
}) => {
  const classes = classnames({
    [`${MODIFIER}--black`]: black,
    [`${MODIFIER}--white`]: white,
    [`${MODIFIER}--large`]: large,
    [`${MODIFIER}--medium`]: medium
  })

  return (
    <div className={`radio-group ${classes}`}>
      <input
        id={id}
        name={name}
        className="radio-group__radio"
        type="radio"
        onChange={onChange}
        {...props} />

      <label className="radio-group__label" htmlFor={id}>
        {label}

        <i className="radio-group__label__icon icon--check"></i>
      </label>
    </div>
  )
}

export default Radio
