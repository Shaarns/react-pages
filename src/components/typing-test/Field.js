import React from 'react'

const Field = (props) => {
  const it = props.para.length;
  let color;

  return(
    <input type='text' 
      className='typing-test-field'
      onChange={props.handleChange} 
      value={props.value}
      style = {{
        color: props.state ? 'blue' : 'red'
      }}
    />
  )
}

export default Field