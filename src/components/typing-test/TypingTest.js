import React, {useState} from 'react'
import Field from './Field'
import './style.css'

const TypingTest = () => {

  const [value, setValue] = useState([''])
  const [ state, setState ] = useState(false)

  const para ='I recollect that my first exploit in squirrel-shooting was'
  + 'in a grove of tall walnut-trees that shades one side of the valley. '
  + 'I had wandered into it at noontime, when all nature is peculiarly quiet, '
  + 'and was startled by the roar of my own gun, as it broke the Sabbath stillness '
  + 'around and was prolonged and reverberated by the angry echoes.'

  let i = 0;
  const handleChange = (event) => {
  setValue(event.target.value);
  i = i + 1;
  [...value].forEach(n => {
    console.log(n)
    console.log(para.split('')[i])
    if(para.split('')[i] === n)
    setState(true);
  }
  )
  }

  return (
    <section className='typing-test-container'>
      <div className='typing-test-paragraphs'>{para}</div>
      <Field handleChange={handleChange} value = {value} para= {para} state={state} />
    </section>
  )
}

export default TypingTest