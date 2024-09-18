import React,{useEffect,useState} from 'react'
import  appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import myImg from "./img-2.jpg"
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full  py-8 mt-4 text-center ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full    py-8 h-full  pb-20'>

            <div className='w-81 h-90 px-6 max-[900px]:grid max-[900px]:grid-flow-rows pt-4 rounded-md'>
                <img src={myImg} alt="" className=' w-81 h-90 rounded-md' />
                <h1 className='text-center text-2xl text-emerald-400 text--300 font-abr pt-8 pb-8'>The Many Lives of My Zillow Alter Ego</h1>
            </div>
            <Container>
                <div className='  flex max-[900px]:justify-center  max-[900px]: max-[900px]:grid '>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2    max-[900px]:w-full  max-[900px]:py-20  max-[900px]:justify-center  w-1/3 h-70 transform transition duration-500 hover:scale-110'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home