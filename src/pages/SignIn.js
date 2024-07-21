
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { OAuth } from "../components/OAuth"


const SignIn = ()=>{
     
  const [formData,setformData] = useState({})
  const {loading, error} = useSelector((state)=> state.user )
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const handleChange = (e)=>{
      
    setformData({
      ...formData,
      [e.target.id]:e.target.value
    })

   }

   const handleSubmit = async(e)=>{
    e.preventDefault()
        dispatch(signInStart())
    const res =      await fetch('http://localhost:3000/api/auth/signin', {
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify(formData)
           })
         const data =    await res.json()
         console.log(data)
         if(data.success === false){
             dispatch(signInFailure(data.message))
             return
         }
        dispatch(signInSuccess(data))
         navigate("/")
   }
   return <>
      <div className="max-w-lg mx-auto p-3">
         <h1 className="text-center font-semibold my-7 text-3xl" >Sign In</h1>
         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
           <input type="email" placeholder="email" className="p-3 rounded-lg border" onChange={handleChange} id="email"/>
           <input type="password" placeholder="password" className="border p-3 rounded-lg" onChange={handleChange} id="password"/>
           <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading? "Loading...": "Sign In"}</button>

           <OAuth />
         </form>
     
         <div className="flex gap-4 mt-5">
          <p>Dont have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-700">Sign Up</span>
          </Link>
         </div>
       
       {error && <p className="text-red-500">{error}</p>}

      </div>
   
   
   </>

}

export default SignIn