import React, {useContext, useState} from 'react';
import assets from "../assets/assets.js";
import {AuthContext} from "../../context/AuthContext.jsx";

const LoginPage = () => {

    const [currState, setCurrState] = useState('Sign up')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const [isDataSubmitted, setIsDataSubmitted] = useState(false)

    const {login} = useContext(AuthContext)

    const onSubmitHandle = (event) => {
        event.preventDefault()

        if (currState === 'Sign up' && !isDataSubmitted) {
            setIsDataSubmitted(true)
            return
        }

        login(currState === 'Sign up' ? 'signup' : 'login', {fullName, email, password, bio})
    }

    return (
        <div
            className='min-h-screen bg-center bg-cover flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
            {/*----- Left -----*/}
            <img src={assets.logo_big} alt="logo" className='w-[min(30vw,250px]'/>
            {/*----- Right -----*/}
            <form onSubmit={onSubmitHandle}
                  className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
                <h2 className='font-medium text-2xl flex justify-between items-center'>
                    {currState}
                    {isDataSubmitted &&
                        <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="arrow_icon"
                             className='w-5 cursor-pointer'/>
                    }
                </h2>
                {currState === 'Sign up' && !isDataSubmitted && (
                    <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text"
                           className='p-2 border bg-gray-500 rounded-md focus:outline-none'
                           placeholder='Full name' required/>
                )}

                {!isDataSubmitted && (
                    <>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"
                               placeholder='Email Address' required
                               className='p-2 border border-gray-500 rounded-md focus:outline-none focus:right-2 focus:ring-indigo-500'/>

                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"
                               placeholder='Password' required
                               className='p-2 border border-gray-500 rounded-md focus:outline-none focus:right-2 focus:ring-indigo-500'/>
                    </>
                )}

                {
                    currState === 'Sign up' && isDataSubmitted && (
                        <textarea rows={4} onChange={(e) => setBio(e.target.value)} value={bio}
                                  className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus: ring-indigo-500'
                                  placeholder='provide a short bio...' required></textarea>
                    )
                }

                <button type='submit'
                        className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
                    {currState === 'Sign up' ? 'Create Account' : 'Login'}
                </button>

                <div>
                    <input type="checkbox"/>
                    <p>Agree to the terms of use of use & privacy policy</p>
                </div>

                <div className='flex flex-col gap-2'>
                    {
                        currState === 'Sign up' ? (
                            <p className='text-sm text-gray-600'>Already have an account? <span
                                onClick={() => {
                                    setCurrState('Login');
                                    setIsDataSubmitted(false)
                                }}
                                className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
                        ) : (
                            <p className='text-sm text-gray-600'>Create an account <span
                                onClick={() => setCurrState('Sign up')}
                                className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
                        )
                    }
                </div>

            </form>
        </div>
    );
};

export default LoginPage;
