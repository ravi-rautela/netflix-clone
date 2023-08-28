import './App.css'
import HomeScreen from './Components/HomeScreen'
import LoginScreen from './Components/LoginScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const user = null;

  return (
    <div className='App'>
      <BrowserRouter>
        {(!user) ? (<LoginScreen />) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>)
        }

      </BrowserRouter>
    </div>
  )
}

export default App
