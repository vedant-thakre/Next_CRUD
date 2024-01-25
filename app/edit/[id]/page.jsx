import EditTask from '@/components/EditTask'
import React from 'react'

const page = ( { params } ) => {
  const  { id } = params;
  return (
    <EditTask id = {id}/>
  )
}

export default page