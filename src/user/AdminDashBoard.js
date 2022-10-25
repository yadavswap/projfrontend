import React from 'react'
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';

const AdminDashBoard = () => {
  const {user:{name,email,role}} = isAutheticated();
  const adminLeftSide = ()=>{
    return (
      <div className='container p-4'>
      <div className='card'>
      <h4 className='card-header bg-dark text-white'>
        Admin Navigation
      </h4>
      <ul className='list-group'>
        <li className='list-group-item'>
          <Link  to="admin/category" className='nav-link text-success'>Create Category</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="admin/product" className='nav-link text-success'>Create Product</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="admin/products" className='nav-link text-success'>Manage Products</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="admin/orders" className='nav-link text-success'>Manage Orders</Link>
        </li>
      </ul>
      </div>
      </div>
    )
  }
  const adminRightSide = ()=>{
    return (
     <>
     <div>
      <h1>hi admin</h1>
      </div>
     </>


    )
    
  }   
  return (
    <>
        <h1>Admin Dashboard </h1>

    <div className='row'>
      <div className='col-3'>
      {adminLeftSide()}
      </div>
      <div className='col-9'>
      {adminRightSide()}
      </div>
    </div>
    
    


    </>


    
  )
}


export default AdminDashBoard;