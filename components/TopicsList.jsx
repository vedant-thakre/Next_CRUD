import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const TopicsList = () => {
  return (
    <div className='p-4 border rounded-md border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div  >
            <h2 className='font-bold text-2xl' > Task Title</h2>
            <div>Task Description</div>
        </div>

        <div className='flex gap-2' >
            <RemoveBtn/>
            <Link href={"/edit/123"} > 
                <HiPencilAlt size={23} />
            </Link>
        </div>
    </div>
  )
}

export default TopicsList