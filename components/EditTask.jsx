"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const EditTask = ( { id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const getDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/task/${id}`);
      console.log(res)
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
    } catch (error) {
      console.log(error);
    }
  }

  const updateDetails = async(e) => {
        e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/task/${id}`,{
          title,
          description,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
      });
      if(res.data.status){
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, [])
  

  return (
    <form onSubmit={updateDetails} className='flex flex-col gap-3'  >
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
        <button 
          className='bg-green-600 fontbold text-white py-3
          px-6 w-fit rounded-md cursor-pointer' 
          type='submit'
        >Update Task</button>
    </form>
  )
}

export default EditTask 