import React,{useState} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import { signup } from '../auth/helper';

const Signup = ()=> {

  const [values,setValues] = useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
  })
  const {name,email,password,error,success} = values

  const handleChange = name =>event=>{
    setValues({...values,error:false,[name]:event.target.value});

  }
    // const signUpForm = ()=>{
    //     <div className='row'>
    //     <div className="col-md-6 offset-sm-3 text-left">
    //     <form >
    //         <div className='form-group'>
    //         <label className='text-light'>Name</label>
    //         <input className="form-control" type="text" />

    //         </div>
    //         <div className='form-group'>
    //         <label className='text-light'>Email</label>
    //         <input className="form-control" type="email" />

    //         </div>
    //         <div className='form-group'>
    //         <label className='text-light'>Password</label>
    //         <input className="form-control" type="text" />

    //         </div>
    //         <button className='btn btn-success btn-block'>Submit</button>
    //     </form>
    //      </div>

    //     </div>
    // }
  const onSubmit = event =>{
    event.preventDefault();
    setValues({...values,error:false})
    signup({name,email,password})
    .then(data=>{
      if(data.error){
        setValues({...values,error:data.error,success:false})
      }else{
        setValues({
            ...values,
            name:"",
            email:"",
            password:"",
            error:"",
            success:true

        })
      }
    })
    .catch(console.log("Error in signup"))
  }

  const successMessage = () =>{
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-success" style={{display:success ? "" : "none"}}>
            New account was created successfully . Please {" "}
            <Link to="/signin">Sign In</Link>
        </div>
      </div>
      </div>
    );
  };
  
  const errorMessage = () =>{
    return (
      <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
            <div className='alert alert-danger' 
            style={{display:error ? "" : "none"}}
              >
          {error}
           </div>
           </div> 
           </div>
    );
  };

  return (
    <>
    {successMessage()}
    {errorMessage()}
    <h1>Sign Up</h1>
    <div className='row'>
    <div className="col-md-6 offset-sm-3 text-left">

    <form >
        <div className='form-group'>
        <label className='text-light'>Name</label>
        <input className="form-control" type="text" onChange={handleChange("name")} value={name} />

        </div>
        <div className='form-group'>
        <label className='text-light'>Email</label>
        <input className="form-control" type="email" onChange={handleChange("email")}  value={email} />

        </div>
        <div className='form-group'>
        <label className='text-light'>Password</label>
        <input className="form-control" type="text"  onChange={handleChange("password")} value={password}/>

        </div>
        <button onClick={onSubmit} className='btn btn-success btn-block'>Submit</button>
    </form>
     </div>
    <h1>{JSON.stringify(values)}</h1>
    </div>
    </>
    
  );
};


export default Signup;
