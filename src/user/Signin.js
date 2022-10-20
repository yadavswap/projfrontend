import React,{useState} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
const Signin = ()=> {
  return (
    <>
    <h1>Sign In</h1>
    <div className='row'>
    <div className="col-md-6 offset-sm-3 text-left">
    <form >
        <div className='form-group'>
        <label className='text-light'>Email</label>
        <input className="form-control" type="email" />

        </div>
        <div className='form-group'>
        <label className='text-light'>Password</label>
        <input className="form-control" type="text" />

        </div>
        <button className='btn btn-success btn-block'>Submit</button>
    </form>
     </div>

    </div>
    </>
        
    
  )
}


export default Signin;
