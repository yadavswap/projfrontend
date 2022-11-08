import React, { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import { getAllCategories,getCategory,updateCategory } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";

const UpdateCategory = ({params}) => {
  const { categoryId } = useParams();


  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    name: "",
    loading:false,
    error:"",
    createdCategory:"",
    getRedirect:false,
    formData:""
  });
const { name, error,createdCategory,formData } = values;
const preload = categoryId=>{
getCategory(categoryId).then(data=>{
    // console.log(data)
    if(data.error){
        setValues({...values,error:data.error})
    }else{
      preloadCategories();
        setValues({...values,
          name:data.name,
          formData:new FormData()
        })
    }
})
}
const preloadCategories = () => {
  getAllCategories().then(data => {
    if (data.error) {
      setValues({ ...values, error: data.error });
    } else {
      setValues({
        categories: data,
        formData: new FormData()
      });
    }
  });
};
useEffect(() => {
  // console.log("Match" , match.params);

  preload(categoryId);
  },[]);

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values,error:"",loading:true})
    
    updateCategory(categoryId,user._id,token,formData).then(data=>{
      if(data.error){
        setValues({...values,error:data.error})
      }else{
        setValues({
          ...values,
          name:"",
          loading:false,
          createdCategory:data.name
        })
      }
    })
  };
  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value
    formData.set(name,value);
    setValues({...values,[name]:value});
  };
  const warningMessage = () =>{
    if(error){
        return <h4 className="alert alert-danger mt-3">Failed to create category</h4>
    }
}


  const successMessage = () =>(
  <div className="alert alert-success mt-3"
    style={{display:createdCategory ? "" : "none"}}
  >
  <h4>{updateCategory} Created Successfully</h4>
  
  </div>
  )

  


  

  const createCategoryForm = () => (
    <form>
      
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
    
     
      

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Category
      </button>
    </form>
  );

  return (
    // <Base
    //   title="Add a Category here!"
    //   description="Welcome to Category creation section"
    //   className="container bg-info p-4"
    // >
    <>


  
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
        {warningMessage()}
        {successMessage()}
        {createCategoryForm()}</div>
        <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      </div>
      
      </>
    // </Base>
  );
};

export default UpdateCategory;
