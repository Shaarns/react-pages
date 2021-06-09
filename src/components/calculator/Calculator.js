import React, { useState, useEffect } from 'react'
import Button from './Button'
import DisplayValue from './DisplayValue'
import './style.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0')

  const handleClick = (event) => {
    const value = event.target.value
    if (display.charAt(0) === '0') setDisplay(display.replace('0', '') + value)
    else setDisplay(display + value)
    if (display === 'Maths Error') setDisplay('' + value)
    switch (value) {
      case 'AC':
        setDisplay('')
        break

      case '=':
        let ans = ''
        try {
          ans += eval(display)
        } catch (err) {
          ans += 'Maths Error'
          setDisplay(ans)
        }
        if (ans === undefined) {
          ans += 'Maths Error'
          setDisplay('Math Error')
        } else setDisplay(ans)
        break

      case 'del':
        setDisplay(display.slice(0, display.length - 1))
        break

      case '+/-':
        // if (display.search('+'))
        setDisplay(display.replace('+', '-'))
        // else if (display.search('-') === '-') {
        //   setDisplay(display.replace('-', '+'))
        // }
        break

      default: {
        break
      }
    }
  }

  return (
    <div className='calculator-container'>
      <DisplayValue value={display} />
      <section className='grid-container'>
        <Button onClick={handleClick} value='AC' />
        <Button onClick={handleClick} value={'del'} />
        <Button onClick={handleClick} value={'+/-'} />
        <Button onClick={handleClick} value={'/'} />
        <Button onClick={handleClick} value={'9'} />
        <Button onClick={handleClick} value={'8'} />
        <Button onClick={handleClick} value={'7'} />
        <Button onClick={handleClick} value={'+'} />
        <Button onClick={handleClick} value={'6'} />
        <Button onClick={handleClick} value={'5'} />
        <Button onClick={handleClick} value={'4'} />
        <Button onClick={handleClick} value={'-'} />
        <Button onClick={handleClick} value={'3'} />
        <Button onClick={handleClick} value={'2'} />
        <Button onClick={handleClick} value={'1'} />
        <Button onClick={handleClick} value={'*'} />
        <Button onClick={handleClick} value={'%'} />
        <Button onClick={handleClick} value={'0'} />
        <Button onClick={handleClick} value={'.'} />
        <Button onClick={handleClick} value={'='} />
      </section>
    </div>
  )
}
export default Calculator
