import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {  getAllCategories,deleteCategory } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";

const ManageCategories =()=> {
  const { user, token } = isAutheticated();
  const [categories, setcategories] = useState([]);
  const preload = ()=>{
    getAllCategories().then(data=>{
        if(data.error){
            console.log(data.error);
        }else{
          setcategories(data)
        }
    })
    }
    useEffect(() => {
      preload();
     },[]);
     
     const deleteThisCategory  = categoryId=>{
      deleteCategory(categoryId,user._id,token).then(data=>{
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
             <h2 className="text-center text-white my-3">Total  {categories.length} products</h2>
   
            {categories.map((category,index)=>{
               return (
               <div  key={index} className="row text-center mb-2 ">
               <div className="col-4">
                 <h3 className="text-white text-left">{category.name}</h3>
               </div>
               <div className="col-4">
                 <Link
                   className="btn btn-success"
                   to={`/admin/category/update/${category._id}`}
                 >
                   <span className="">Update</span>
                 </Link>
               </div>
               <div className="col-4">
                 <button onClick={() => {deleteThisCategory(category._id)}} className="btn btn-danger">
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

export default ManageCategories;