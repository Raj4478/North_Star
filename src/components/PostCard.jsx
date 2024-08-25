import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className=' w-full h-full  rounded-xl p-4 '>
            <div className='w-full h-full justify-center  mb-4 '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-full w-full object-cover' />

            </div>
            <h2
            className='text-xl text-center text-sky-400 font-brush font-extrabold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard