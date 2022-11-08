import {API_PATH} from "../../config";

export const createCategory= (userId,token,category) => {
    return fetch(`${API_PATH}/category/create/${userId}`,{
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

// get all users
export const getAllUsers= () => {
  return fetch(`${API_PATH}/users`,{
    method: "GET",
    })
  .then(response =>{
    return response.json();
  })
  .catch((err => console.log(err)));
};
   // delete category
   export const deleteUser= (userId,token) => {
    return fetch(`${API_PATH}/user/${userId}`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };


  // get all categories
  export const getAllCategories= () => {
    return fetch(`${API_PATH}/categories`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // create product
  export const createProduct= (userId, token, product) => {
    return fetch(`${API_PATH}/product/create/${userId}`,{
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
    return fetch(`${API_PATH}/product/${productId}`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // delete product
  export const deleteProduct= (productId,userId,token) => {
    return fetch(`${API_PATH}/product/${productId}/${userId}`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };


  // update product
  export const updateProduct= (productId,userId,token,product) => {
    return fetch(`${API_PATH}/product/${productId}/${userId}`,{
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

   // get category
   export const getCategory= categoryId => {
    return fetch(`${API_PATH}/category/${categoryId}`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };

  // get All Products
  export const getAllProducts= () => {
    return fetch(`${API_PATH}/products`,{
      method: "GET",
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };


   // delete category
   export const deleteCategory= (categoryId,userId,token) => {
    return fetch(`${API_PATH}/category/${categoryId}/${userId}`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
      })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };


   // update category
   export const updateCategory= (categoryId,userId,token,category) => {
    return fetch(`${API_PATH}/category/${categoryId}/${userId}`,{
      method: "PUT",
      headers:{
          Accept:"application/json",
          Authorization:`Bearer ${token}`
      },
      body: category
    })
    .then(response =>{
      return response.json();
    })
    .catch((err => console.log(err)));
  };