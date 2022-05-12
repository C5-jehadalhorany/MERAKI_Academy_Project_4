import React from 'react'
import axios from 'axios'
import  { useState } from 'react'

export const Register = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [massage, setMassage] = useState("")

  const dataServer = () => {
    axios.post(("http://localhost:5000/users/register"), {
      name: name,
      age: age,
      email: email,
      password: password
    }).then((result) => {
      console.log(result);

    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
      <p>Register</p>
      <input type="text" placeholder='name'
        onChange={(e) => {
          setName(e.target.value)
        }} />

      <input type="text" placeholder='age'
        onChange={(e) => {
          setAge(e.target.value)
        }} />

      <input type="text" placeholder='email'
        onChange={(e) => {
          setEmail(e.target.value)
        }} />

      <input type="text" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }} />

      <button onClick={dataServer}>Register</button>

      <p>
        {massage}
      </p>
    </div>

  )
}

export default Register