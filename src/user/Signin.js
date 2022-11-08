import React,{useState} from 'react'
import { signin ,authenticate,isAutheticated} from '../auth/helper'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

const Signin = ()=> {

  const [values,setValues] = useState({
    email:"",
    password:"",
    error:"",
    loading:false,
    didRedirect:false
  })
  const {email,password,error,loading,didRedirect} = values;
  const {user} = isAutheticated();

  const onSubmit = event =>{
    // {console.log(event.preventDefault())}
    event.preventDefault();
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data=>{
      if(data.error){
        setValues({...values,error:data.error,loading:false})
      }else{
        authenticate(data, () =>{
          setValues({
            ...values,
            didRedirect:true
        })
        })
      }
    })
    .catch(console.log("signin failed"))
  }
  const performRedirect = () =>{
    if(didRedirect){
      if(user && user.role == 1){
        return <p>redirect to admin</p>
      }else{
        return <p>redirect to user</p>
      }
    }
    if(isAutheticated()){
      return <Redirect to="/"/>
    }
  }
  const handleChange = name =>event=>{
    setValues({...values,error:false,[name]:event.target.value});

  }

  const loadingMessage = () =>{
    return (
      loading && (
        <div className='alert alert-info'>
        <h2>Loading ...</h2>
        </div>
      )
    );
  };
  
  const errorMessage = () =>{
    return (
      <>
         <CAlert color="danger" style={{display:error ? "" : "none"}}>
         {error}
     
    </CAlert>
      </>
      // <div className="row">
      // <div className="col-md-6 offset-sm-3 text-left">
      //       <div className='alert alert-danger' 
      //       style={{display:error ? "" : "none"}}
      //         >
      //     {error}
      //      </div>
      //      </div> 
      //      </div>
    );
  };
  return (
    
    <>
    {loadingMessage()}
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">

      <CContainer>
      {errorMessage()}

        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email"
                       autoComplete="email" 
                       type="email" 
                       onChange={handleChange("email")} 
                       value={email} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handleChange("password")}
                        value={password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4"  onClick={onSubmit}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/signup">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    {/* <h1>Sign In</h1>
    <div className='row'>
    <div className="col-md-6 offset-sm-3 text-left">
    <form >
        <div className='form-group'>
        <label className='text-light'>Email</label>
        <input className="form-control" type="email" onChange={handleChange("email")} value={email} />

        </div>
        <div className='form-group'>
        <label className='text-light'>Password</label>
        <input className="form-control" type="text" onChange={handleChange("password")} value={password}  />

        </div>
        <button onClick={onSubmit} className='btn btn-success btn-block'>Submit</button>
    </form>
     </div>

    </div> */}
    {performRedirect()}
    {/* <h1>{JSON.stringify(values)}</h1> */}
    </>
        
    
  )
}


export default Signin;
