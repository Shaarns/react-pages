import React, {useEffect} from 'react'

const Model = (props) => {
  useEffect(() => {
    setTimeout(() =>{
      props.modelToggle()
    }, 3000)
  })
  return (
    <div>
      {props.modelContent}
    </div>
  )
}

export default Model
