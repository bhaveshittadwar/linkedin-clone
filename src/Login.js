import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => { };

  return (
    <div className='login'>
      <img src="https://www.pngkey.com/png/detail/14-143268_file-linkedin-logo-svg-linkedin-logo-png-no.png" alt="" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (Required if Registering)" type="text" />

        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Email' placeholder='Profile Picture URL' type="text" />

        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" name="" id="" />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
