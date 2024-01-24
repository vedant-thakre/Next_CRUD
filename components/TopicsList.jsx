"use client"
import React, { useState, useEffect } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import axios from 'axios'

const TopicsList = ( {k, id, tit, desc}) => {
   
  const handleClick = () => {

  }

  return (
    <div className='p-4 border rounded-md border-slate-300 my-3 flex justify-between gap-5 items-start'>
          <div key={k}>
              <h2 onClick={handleClick} className='font-bold text-2xl' >{tit}</h2>
              <div>{desc}</div>
          </div>

        <div className='flex gap-2' >
            <RemoveBtn/>
            <Link href={`/edit/${id}`} > 
                <HiPencilAlt size={23} />
            </Link>
        </div>
    </div>
  )
}

export default TopicsList