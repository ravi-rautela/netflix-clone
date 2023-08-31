import './App.css'
import { useEffect } from 'react'
import HomeScreen from './Components/HomeScreen'
import ProfileScreen from './Components/ProfileScreen'
import LoginScreen from './Components/LoginScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Components/firebase'
import { useDispatch,useSelector} from 'react-redux'
import { logout, login, selectUser } from './features/userSlice'

function App() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        // Log Out
        dispatch(logout());
      }
    });

    return unsubcribe;
  }, [dispatch]);



  return (
    <div className='App'>
      <BrowserRouter>
        {(!user) ? (<LoginScreen />) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>)
        }

      </BrowserRouter>
    </div>
  )
}

export default App
