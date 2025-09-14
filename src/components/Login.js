import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div >
    <Header/>
    <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg' 
      alt='bg-image'/>
    </div>
    <form className='relative bg-black/80 w-3/12 m-auto top-20 p-5 py-5 rounded-md'>
      <h1 className='font-bold text-3xl text-white mb-4 p-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
      {!isSignInForm &&  <input type='text' placeholder='Enter Full Name' className='p-2 my-3 py-4 w-full rounded-md 
      border border-gray-600 bg-black/30'/>}
      <input type='email' placeholder='Enter Email' className='p-2 py-4 w-full rounded-md
      border border-gray-600 bg-black/30'/>
      <input type='password' placeholder='Enter Password' className='p-2 my-3 py-4 w-full rounded-md 
      border border-gray-600 bg-black/30'/>
      <button type='button' className='p-2 py-4 my-3 bg-red-600 text-white rounded-lg w-full font-bold mt-5'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 text-white'>{isSignInForm ? 'New to Netflix? ' : 'Already register '}<span className='font-bold cursor-pointer' onClick={toggleForm}>
          {isSignInForm ? 'Sign Up now.' : 'Sign In now.'}</span></p>
    </form>
  </div>

    
  )
}

export default Login