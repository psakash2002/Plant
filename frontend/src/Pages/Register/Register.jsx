import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [username, setusername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  async function registerUser(ev){
    ev.preventDefault();
    try{
    await axios.post('/register', {
      username,
      email,
      password
    });
    alert('Registration successful, Now you can log in');
    }catch(e){
        alert('failed');
    }
  }
  return (
    <div className="bg-gray-200 flex justify-center">
        <div className='h-[40rem] content-center'>
        <form className='flex flex-col bg-blue-300 p-10 w-max gap-2 rounded-md' onSubmit={registerUser}>
            <div className='flex justify-between'>
                <label>Username:</label>
                <input className='border-2 rounded-md' type='text'
                value={username}
                onChange={(ev)=>setusername(ev.target.value)}
                autoComplete='false'
                />
            </div>
            <div className='flex justify-between'>
                <label>Email:</label>
                <input className='border-2 rounded-md' type='text'
                value={email}
                onChange={(ev)=>setEmail(ev.target.value)}/>
            </div>
            <div className='flex justify-between'>
                <label>Password:</label>
                <input className='border-2 rounded-md' type='password'
                value={password}
                onChange={(ev)=>setPassword(ev.target.value)}/>
            </div>
            <div className='flex justify-center mt-3'>
                <button className='bg-green-600 text-white p-1 rounded-md' type='submit'>Register</button>
            </div>
            <div className='flex justify-center'>
              <p>Already have an account? <span className='underline text-blue-800'><Link to='/login'>Sign in</Link></span></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register