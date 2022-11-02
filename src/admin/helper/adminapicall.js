// import {API} from "../../backend";
export const createCategory= (userId,token,category) => {
    return fetch(`http://127.0.0.1:8000/api/category/create/${userId}`,{
      method: "POST",
      headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`

      },
      body: JSON.stringify(category)
    })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };


  // get all categories
  export const getAllCategories= () => {
    return fetch(`http://127.0.0.1:8000/api/categories`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // create product
  export const createProduct= (userId, token, product) => {
    return fetch(`http://127.0.0.1:8000/api/product/create/${userId}`,{
      method: "POST",
      headers:{
          Accept:"application/json",
          Authorization:`Bearer ${token}`

      },
      body: product
    })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

 

  // get product
  export const getProduct= productId => {
    return fetch(`http://127.0.0.1:8000/api/product/${productId}`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // delete product
  export const deleteProduct= (productId,userId) => {
    return fetch(`http://127.0.0.1:8000/api/product/${productId}/${userId}`,{
      method: "DELETE",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // update product
  export const updateProduct= (userId,productId,token,product) => {
    return fetch(`http://127.0.0.1:8000/api/product/${productId}/${userId}`,{
      method: "PUT",
      headers:{
          Accept:"application/json",
          Authorization:`Bearer ${token}`

      },
      body: product
    })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // get All Products
  export const getAllProducts= () => {
    return fetch(`http://127.0.0.1:8000/api/products`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };
