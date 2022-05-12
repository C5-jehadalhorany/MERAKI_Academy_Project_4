import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token , setToken]=useState("")
  const dataServer = () => {
    axios.post(("http://localhost:5000/login"),{
      email:email,
      password:password
    }).then((result)=>{
      localStorage.setItem("token",result.data.token)
      console.log(result);
      setToken(result.data.token)
      
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <p>Login</p>
      <input type="text" placeholder='email'
        onChange={(e) => {
          setEmail(e.target.value)
        }} />

      <input type="text" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }} />
        <button onClick={dataServer}>Login</button>
    </div>
  )
}

export default Login
