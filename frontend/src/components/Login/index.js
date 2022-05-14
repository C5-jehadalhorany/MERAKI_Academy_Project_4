import { tokenContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'




export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { token, setToken } = useContext(tokenContext)
  const dataServer = () => {
    axios.post(("http://localhost:5000/login"), {
      email: email,
      password: password
    }).then((result) => {
      localStorage.getItem("token")
      console.log(result.data.token);
      
      if (result) {

        navigate("/Dashboard")
        localStorage.setItem("token", result.data.token)
        console.log(result);
        setToken(result.data.token)
        localStorage.getItem("token")
        
      }
    }).catch((err) => {
      // console.log(err.response.data.message);
    })
  }
  return (
    <div>
      <p>Login</p>
      <input type="email" placeholder='email'
        onChange={(e) => {
          setEmail(e.target.value)
        }} />

      <input type="password" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }} />
      <button onClick={() => {
        dataServer()

      }}>Login</button>
    </div>
  )
}

export default Login
