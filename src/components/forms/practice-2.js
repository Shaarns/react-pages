import React, { useState } from 'react'

const FormPractice2 = () => {
  const [values, setValues] = useState({ name: '', email: '' })
  const [people, setPeople] = useState([])
  const [toShow, setToShow] = useState('all')

  const handleChange = (event) => {
    // // setValues({
    // //   ...values, [event.target.name]: event.target.value
    // // })
    const name = event.target.name
    const value = event.target.value
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!values.name && !values.email) {
      return
    }
    const newPerson = { ...values, id: Date.now(), complete: false }
    setPeople([...people, newPerson])
    setValues({ email: '', name: '' })
    console.log(people)
  }
  const handleDelete = (id) => {
    const deletedTasks = people.filter((person) => !person.complete)
    setPeople(deletedTasks)
  }

  const handleClick = (id) => {
    const newPeople = people.map((person) => {
      if (person.id === id) {
        return {
          ...person,
          complete: !person.complete,
        }
      } else {
        return person
      }
    })
    setPeople(newPeople)
  }

  let newPeople = []
  if (toShow === 'all') {
    newPeople = people
  } else if (toShow === 'active') {
    const active = people.filter((person) => !person.complete)
    newPeople = active
  } else if (toShow === 'completed') {
    const completed = people.filter((person) => person.complete)
    newPeople = completed
  }
  const handleShow = (status) => {
    setToShow(status)
  }

  return (
    <section style={{ textAlign: 'center', fontSize: '1.6rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={values.name}
        />
        <input
          type='text'
          name='email'
          onChange={handleChange}
          value={values.email}
        />
        <input type='submit' onChange={handleSubmit} />
      </form>
      <div>
        <button onClick={() => handleDelete(people.id)}>
          deleted Completd Tasks
        </button>
        {newPeople.map((persons) => (
          <section
            style={{ display: 'flex', justifyContent: 'center' }}
            key={persons.id}
          >
            <div
              style={{ textDecoration: persons.complete ? 'line-through' : '' }}
            >
              {JSON.stringify(persons)}
            </div>
            <button onClick={() => handleClick(persons.id)}>complete</button>
          </section>
        ))}
      </div>
      <div>Tasks left{people.filter((person) => !person.complete).length}</div>
      <button onClick={() => handleShow('all')}>Show ALl</button>
      <button onClick={() => handleShow('completed')}>Show completed</button>
      <button onClick={() => handleShow('active')}>Show active</button>
    </section>
  )
}

export default FormPractice2
