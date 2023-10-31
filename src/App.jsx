import './App.css'
import Home from './pages/Home'
import { Route , Routes } from "react-router-dom"
import Movie from "./pages/Movie"
import HomePage from "./pages/HomePage"
import Tv from "./pages/Tv"
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <div>

        <NavBar />
        <Routes>
            <Route path='/' element={ <HomePage/> }></Route>
            <Route path='/movie' element={ <Movie />}></Route>
            <Route path='/tv' element={ <Tv /> }></Route>
            <Route path='/browse' index element={ <Home /> }></Route>
        </Routes> 
    </div>
    </>
  )
}

export default App
