import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveBtn = ( { id }) => {
  const router = useRouter();
  const handleclick = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/task?id=${id}`);

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

export default RemoveBtn;


/*

Hello Sakshi Ma'am, I'm Vedant Thakre, a Full stack developer interested in the MERN stack developer roles which you're hiring for. I have experience working with technologies like, React JS, Tailwind CSS, Bootstrap, Next JS, Next JS, Node Js, Mongo, AWS, etc. Currently, I am working as a Backend intern at FirstStore, I bring a strong skill set developed through internships and personal projects. I've attached is my resume eager to discuss how my skills align with your team's needs.
https://bit.ly/3vcdd0Y


 */