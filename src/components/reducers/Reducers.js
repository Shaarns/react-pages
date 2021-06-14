import React, {useReducer, useState} from 'react'
import Model from './Model'
import { data } from '../../data'
import { reducer } from './reducer'
import './style.css'

const Reducers = () => {
  //default value is initial value for the state
  const defaultValue = {
    people: data,
    isModelOpen: true,
    modelContent: '',
  }
  const [name, setName] = useState('')
  //useReduce have two parameters reducer and and initial values
  const [state, dispatch] = useReducer(reducer, defaultValue)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(name){
      const newPeople = {id: Date.now() , name}
      //dispatch type and payload
      dispatch({type: 'ADD_ITEM', payload: newPeople})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const modelToggle = () => {
    dispatch({type:'CLOSE_MODEL'})
  }
  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM' , payload: id})
  }

  return (
    <section style={{margin:'30px 0', textAlign:'center', fontSize: '2rem'}}>
      <div>Use Reducer example</div>
      {state.isModelOpen
      &&
      <Model
        modelContent = {state.modelContent}
        modelToggle = {modelToggle}
      />}
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            onChange={(event)=> setName(event.target.value)}
            value={name}
          />
          <button onSubmit={handleSubmit} className="buttonPrimary">submit</button>
        </form>
      </section>
      {state.people.map(person => (
        <div key={person.id}>
          <div>
            {person.name}
          </div>
          <button
            className="buttonSecondary"
            onClick={() => handleRemove(person.id)}>
            REMOVE
          </button>
        </div>
      ))}
    </section>
  )
}
export default Reducers