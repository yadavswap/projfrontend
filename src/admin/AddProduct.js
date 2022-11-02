import React, { useState,useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllCategories,createProduct } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";
const AddProduct = () => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo:"",
    categories:[],
    category:"",
    loading:false,
    error:"",
    createdProduct:"",
    getRedirect:"",
    formData:""
  });

  const { name, description, price, stock,photo,categories,category,loading,error,createdProduct,getRedirect,formData } = values;
const preload = ()=>{
getAllCategories().then(data=>{
    // console.log(data)
    if(data.error){
        setValues({...values,error:data.error})
    }else{
        setValues({...values,categories:data,formData:new FormData()})
        console.log(categories);
    }
})
}
useEffect(() => {
   preload();
  },[]);
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({...values,error:"",loading:true})
    createProduct(user._id,token,formData).then(data=>{
      if(data.error){
        setValues({...values,error:data.error})
      }else{
        setValues({
          ...values,
          name:"",
          description:"",
          price:"",
          photo:"",
          stock:"",
          loading:false,
          createdProduct:data.name
        })
      }
    })
  };

  const successMessage = () =>(
  <div className="alert alert-success mt-3"
    style={{display:createdProduct? "" : "none"}}
  >
  <h4>{createProduct} Created Successfully</h4>
  
  </div>
  )

  const warningMessage = () =>{
    if(error){
        return <h4 className="alert alert-danger mt-3">Failed to create category</h4>
    }
}

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value
    formData.set(name,value);
    setValues({...values,[name]:value});
  };

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories && categories.map((cat,index)=>(
            <option key={index} value={cat._id}>{cat.name}</option>

          ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    // <Base
    //   title="Add a product here!"
    //   description="Welcome to product creation section"
    //   className="container bg-info p-4"
    // >
    <>


  
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
        {warningMessage()}
        {successMessage()}
        {createProductForm()}</div>
        <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      </div>
      
      </>
    // </Base>
  );
};

export default AddProduct;
