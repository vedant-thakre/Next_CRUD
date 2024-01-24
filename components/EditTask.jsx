"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  

  const getDetails = async () => {
      console.log(router)
      try {
        const res = await axios.get(`http://localhost:3000/edit/${id}`);
        console.log(res);
      } catch (error) {
      
      }
  }

  useEffect(() => {
    getDetails();
  }, [])
  

  return (
    <form className='flex flex-col gap-3'  >
        <input 
            className='border border-slate-500 rounded-sm px-8 py-2'
            type="text" 
            value={title}
            placeholder='Title' 
            onChange={(e) => {
              setTitle(e.target.value);
            }}
        />
        <input 
            className='border border-slate-500 rounded-sm px-8 py-2'
            type="text" 
            value={description}
            placeholder='Description' 
            onChange={(e) => {
              setDescription(e.target.value);
            }}
        />
        <button className='bg-green-600 fontbold text-white py-3 px-6 w-fit rounded-md cursor-pointer' >Edit Task</button>
    </form>
  )
}

export default EditTask 