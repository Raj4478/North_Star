
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { login,logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';

import authService from './appwrite/auth';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App() {

  const[loading,setLoading] = useState(true);

  const dispatch = useDispatch()

  useEffect(() => {

authService.getCurrentUser()
.then((userData) => {
  if(userData){

    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(() => setLoading(false))
  },[])



  return (

!loading ? <div className='min-h-screen flex flex-wrap content-between bg-var3' >
  <div className='w-full block'>
  <Header/>
  <main>
     <Outlet />
  </main>
  <Footer/>
  </div></div> : null
   
  )
}