import React , { useEffect } from 'react';
import useForm from './UseForm';

const FormPractice1 = () => {
 const [values, handleChange] = useForm({email: '', password: '', });

 useEffect(()=>{
  // const onMouseMove =(event) => {
  //   console.log(event);
  // };
  // window.addEventListener('mousemove', onMouseMove);

  // return () => {
  //   window.removeEventListener('mousemove', onMouseMove);
  // };
 }, []);

  return (
    <div style={{padding: 40, margin: 'auto',}} >
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="submit"
      />
    </div>
  )
}

export default FormPractice1
