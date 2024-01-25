import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveBtn = ( { id }) => {
  const router = useRouter();
  const handleclick = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/task?id=${id}`);
      console.log(res);
      console.log(res.data.status);
      if(res.data.status == true){
          router.refresh();
      }
    } catch (error) {
      console.log(error)
    }
  }
   return (
    <button className='text-red-400' onClick={handleclick} >
        <HiOutlineTrash size={24}  /> 
    </button>
  )
}

export default RemoveBtn