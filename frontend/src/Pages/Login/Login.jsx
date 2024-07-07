import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
      await axios.post('/login',{username, password});
      alert('Login Successful');
    }catch(e){
      alert('Login failed');
    }
  }
  return (
    <div className="bg-gray-200 flex justify-center">
        <div className='h-[40rem] content-center'>
        <form className='flex flex-col bg-blue-300 p-10 w-max gap-2 rounded-md' onSubmit={handleLoginSubmit}>
            <div className='flex justify-between'>
                <label>Username:</label>
                <input className='border-2 rounded-md' type='text'
                value={username}
                onChange={ev=>setUsername(ev.target.value)}/>
            </div>
            <div className='flex justify-between'>
                <label>Password:</label>
                <input className='border-2 rounded-md' type='password'
                value={password}
                onChange={ev=>setPassword(ev.target.value)}/>
            </div>
            <div className='flex justify-center mt-3'>
                <button className='bg-green-600 text-white p-1 rounded-md' type='submit'>Sign in</button>
            </div>
            <div className='flex justify-center'>
              <p>No Account? Create One <span className='underline text-blue-800'><Link to='/register'>here</Link></span></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login