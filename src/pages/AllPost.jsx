import React from 'react'
import  appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import { useState,useEffect } from 'react'

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  appwriteService.getPosts([]).then((posts) => {
      if (posts) {
          setPosts(posts.documents)
      }
  })
return (
  <div className='w-full py-8  bg-Var4 opacity-90'>
      <Container>
          <div className='flex flex-wrap '>
              {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-1/4 transform pb-24 transition duration-500 hover:scale-110'>
                      <PostCard {...post} />
                  </div>
              ))}
          </div>
          </Container>
  </div>
)
}

export default AllPosts