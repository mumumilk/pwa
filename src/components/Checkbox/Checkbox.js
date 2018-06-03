import React from 'react'
import classnames from 'classnames'

const MODIFIER = 'checkbox-group'

const Checkbox = ({
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
    <div className={`checkbox-group ${classes}`}>
      <input
        id={id}
        name={id}
        className="checkbox-group__checkbox"
        type="checkbox"
        onChange={onChange}
        {...props} />

      <label className="checkbox-group__label" htmlFor={id}>
        {label}

        <i className="checkbox-group__label__icon fa fa-check"></i>
      </label>
    </div>
  )
}

export default Checkbox
