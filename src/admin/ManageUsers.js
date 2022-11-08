import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {  getAllUsers,deleteUser } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";
const ManageUsers = () => {
    const { user, token } = isAutheticated();
    const [users, setusers] = useState([]);
    const preload = ()=>{
      getAllUsers().then(data=>{
          if(data.error){
              console.log(data.error);
          }else{
            setusers(data)
          }
      })
      }
      useEffect(() => {
        preload();
       },[]);
       
       const deleteThisUser  = userId=>{

        deleteUser(userId,token).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                preload()
            }
        })
      }
  return (
    <>
    <div className="row">
       <div className="col-12">
         <h2 className="text-center text-white my-3">Total  {users.length} products</h2>
        
        {users.map((user,index)=>{
           return (
           <div  key={index} className="row text-center mb-2 ">
           <div className="col-2">
             <h3 className="text-white text-left">{user.name}</h3>
           </div>
           <div className="col-2">
             <h3 className="text-white text-left">{user.email}</h3>
           </div>
           <div className="col-4">
             <Link
               className="btn btn-success"
               to={`/admin/user/update/${user._id}`}
             >
               <span className="">Update</span>
             </Link>
           </div>
           <div className="col-4">
             <button onClick={() => {deleteThisUser(user._id)}} className="btn btn-danger">
               Delete
             </button>
           </div>
         </div>
         )
        })}
       </div>
     </div>
  </>
  )
}

export default ManageUsers