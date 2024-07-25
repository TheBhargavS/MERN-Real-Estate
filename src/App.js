import {Routes, Route, BrowserRouter} from 
'react-router-dom'
import Home from './pages/Home.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import About from './pages/About.js'
import Profile from './pages/Profile.js'
import Header from './components/Header.jsx'
import './App.css';
import { PrivateRoute } from './components/PrivateRoute.js'

function App() {
  return <>
   <BrowserRouter>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path='/sign-in' element={<SignIn/>}  />
         <Route path='/sign-up' element={<SignUp/>}  />
         <Route path='/About'  element={<About/>}  />
         <Route element={<PrivateRoute/>}>
            <Route path='/Profile' element={<Profile/>} />
         </Route>
       
         
      </Routes>
   </BrowserRouter>
  
  </>
}

export default App;
