import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios, { axiosSecure } from "../../../hooks/useAxios";
import useCarts from "../../../hooks/useCarts";

const Product = ({ product }) => {
  const { name, recipe, image, category, price, _id } = product;
  const navigate = useNavigate();
  const axiosSecure = useAxios()
  const {user} = useAuth();
  const [, refetch] = useCarts()
  const handleAddToCart = (food) =>{
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        email : user.email,
        name,price, image
      }
      axiosSecure.post('/carts', cartItem)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Cart has been add",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
    }
  }
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
      <img
        src={image} // এখানে আপনার ইমেজ URL যোগ করুন
        alt="Caesar Salad"
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{recipe}</p>
        <button onClick={()=>handleAddToCart(product)} className="mt-4 w-full px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg focus:outline-none">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
