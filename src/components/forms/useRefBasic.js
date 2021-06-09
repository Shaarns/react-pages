//useRef can be used to target input values usig ref
//presers the value
// and it does not triggers re-renders
// targets DOM nodes/element
import React, {useRef, useEffect} from 'react'

const UseRefBasic = () => {
  const useRefContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit =  (event) => {
    event.preventDefault()
    console.log(useRefContainer.current.value)
    console.log(divContainer)
  }

  useEffect(() => {
    console.log(useRefContainer.current)
    useRefContainer.current.focus();
  })

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type= "text" ref={useRefContainer} />
        <div ref={divContainer}>Hello world</div>
      </form>
    </>
  )

}
export default UseRefBasic