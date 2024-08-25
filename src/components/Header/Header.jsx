import React from 'react'
import Container from '../container/Container'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) =>state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name : 'Home',
      slug : "/",
      active : true
    }
    , 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 flex  justify-evenly shadow bg-var3 '>
      <Container className=" flex justify-evenly">
        <nav className='flex justify-evenly w-full h-full align-middle '>
          <div className='mr-4 '>
            <Link to='/'>
            <div className='flex'>
            <Logo width='70px'   />
            <h1 className='pl-1 mt-6 text-xl font-sans font-extrabold text-var2'>NorthStar</h1>
            </div>
            

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className=' pt-4 pl-2 pr-2 font-medium font-serif'>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2  text-var2  hover:underline underline-offset-8  decoration-var2 w-full transform transition-all hover:duration-500  '
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className=' flex border-pink-800 border-2 font-abr text-pink-800 h-fit rounded-lg'>
               <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header