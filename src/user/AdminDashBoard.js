import React from 'react'
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';

const AdminDashBoard = () => {
  const {user:{name,email}} = isAutheticated();
  const adminLeftSide = ()=>{
    return (
      <div className='container p-4'>
      <div className='card'>
      <h4 className='card-header bg-dark text-white'>
        Admin Navigation
      </h4>
      <ul className='list-group'>
      <li className='list-group-item'>
          <Link  to="/admin/users" className='nav-link text-success'>Manage Users</Link>
        </li>
        <li className='list-group-item'>
       
          <Link  to="/admin/create/category" className='nav-link text-success'>Create Category</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="/admin/categories" className='nav-link text-success'>Manage Categories</Link>
        </li>
      
        <li className='list-group-item'>
          <Link  to="/admin/create/product" className='nav-link text-success'>Create Product</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="/admin/products" className='nav-link text-success'>Manage Products</Link>
        </li>
        <li className='list-group-item'>
          <Link  to="/admin/orders" className='nav-link text-success'>Manage Orders</Link>
        </li>
     
      </ul>
      </div>
      </div>
    )
  }
  const adminRightSide = ()=>{
    return (
<>
      <div className='container p-4'></div>
     <div className='card mb-4'>
      <h4 className='card-header'>
        Admin Information
      </h4>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span className='badge badge-success mr-2 text-black'> Name : </span>{name}
        </li>
        <li className='list-group-item'>
          <span className='badge badge-success mr-2 text-black'> Email : </span>{email}
        </li>
        <li className='list-group-item'>
          <span className='badge badge-danger mr-2 text-black'>Admin Area </span>
        </li>
      </ul>
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