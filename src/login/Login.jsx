import React, { useState } from 'react'
import { useAuth, useUsername } from '../authWrapper/AuthContext';
import { useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const username = useUsername();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();
        
        login(userData.username, userData.password);
        navigate('/posts');
    }
    return (
        <div className=' max-w-96 m-12'>
            <form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <input required placeholder='Username' className='border' value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value }) } />
            <input required placeholder='Password' type='password' className ='border' value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value }) } />
            <button type='submit' className='bg-blue-400 w-fit px-8 py-2 rounded-2xl text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Login
