import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const dispatch = useDispatch() 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const checkUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log("No active session, logging out");
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  checkUser();
}, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
