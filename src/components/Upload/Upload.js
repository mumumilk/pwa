import React from 'react'
import classnames from 'classnames'

const MODIFIER = 'upload-group'

const Upload = ({
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
    <div className={`upload-group ${classes}`}>
      <input
        id={id}
        name={id}
        className="upload-group__input"
        multiple
        type="file"
        accept="image/png, image/jpeg"
        onClick={onClick}
        onChange={onChange}
        value={value}
        {...props} />

      <label className="upload-group__label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Upload
