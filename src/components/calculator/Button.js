import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <section>
      <input
        onClick={props.onClick}
        className='grid-items'
        type='button'
        value={props.value}
      />
    </section>
  )
}

export default Button
