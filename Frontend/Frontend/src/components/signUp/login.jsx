import React from 'react'
import { useRef } from 'react'

const login = () => {

  const {emailRef,passwordRef} =  useRef()
  const handleSubmit = (e)=>{
    e.preventDefault()
    

  }
  return (
    <>
    <input type="text" placeholder='Enter Your Email' ref={emailRef} />
    <input type= 'text' placeholder = 'Enter Password' ref={passwordRef}/>
    <input type='button'  onClick={handleSubmit}  placeholder='LogMeIN'/>


    </>
  )
}

export default login