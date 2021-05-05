import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { googleLogin } from '../actions/userActions'

const LoginCard: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const submitHandler = () => {
    console.log(email, password)
  }



  return (
    <div>
      <p>Log in with google? <a href="/api/auth/google">Click here</a></p>
    </div>
  )
}

export default LoginCard
