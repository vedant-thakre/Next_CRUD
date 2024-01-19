import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center rounded-md bg-slate-800 px-8 py-3' >
        <Link href="/" className='text-white text-xl font-bold' >TaskDone</Link>
        <Link href="/add" className='bg-white py-1 px-2 rounded-sm' >Add Task</Link>
    </div>
  )
}

export default Navbar