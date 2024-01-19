import React from 'react'

const EditTask = () => {
  return (
    <form className='flex flex-col gap-3'  >
        <input 
            className='border border-slate-500 rounded-sm px-8 py-2'
            type="text" 
            placeholder='Title' 
        />
        <input 
            className='border border-slate-500 rounded-sm px-8 py-2'
            type="text" 
            placeholder='Description' 
        />
        <button className='bg-green-600 fontbold text-white py-3 px-6 w-fit rounded-md cursor-pointer' >Edit Task</button>
    </form>
  )
}

export default EditTask 