import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { signup } from '../auth/helper';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
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
      <CAlert color="primary" style={{display:success ? "" : "none"}}>
      New account was created successfully . Please {" "}
      <Link to="/signin">Sign In</Link>
    </CAlert>
      // <div className="row">
      //   <div className="col-md-6 offset-sm-3 text-left">
      //       <div className="alert alert-success" style={{display:success ? "" : "none"}}>
      //       New account was created successfully . Please {" "}
      //       <Link to="/signin">Sign In</Link>
      //   </div>
      // </div>
      // </div>
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
    {errorMessage()}
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
  
      <CContainer>
      {successMessage()}

        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Name" autoComplete="name"
                     type="text"  onChange={handleChange("name")} value={name}
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText></CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email"
                    type="email" onChange={handleChange("email")}  value={email}
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="password"
                      onChange={handleChange("password")} value={password}
                    />
                  </CInputGroup>
                
                  <div className="d-grid">
                    <CButton onClick={onSubmit}  color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    {/* <h1>Sign Up</h1>
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
    </div> */}
    </>
    
  );
};


export default Signup;
