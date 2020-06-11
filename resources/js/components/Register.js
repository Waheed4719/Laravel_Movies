import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import { Redirect, useHistory, Link } from 'react-router-dom'
import { message } from 'antd'
import { useSelector} from 'react-redux'
import image from './../assets/coverImage2.jpg'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const auth = useSelector(state => state.auth)

useEffect(()=>{

    var nameInput = document.querySelector('input')
var passInput = document.querySelectorAll('input')[1]
if(nameInput){
    nameInput.addEventListener('keyup',()=>{
        if(nameInput.value === ''){
            nameInput.style.border = "1px solid red"
            nameInput.parentElement.querySelector('p').innerHTML = " username cannot be empty"
            nameInput.parentElement.querySelector('p').style.visibility = "visible"
        }
        else{
            nameInput.style.border = ""
            nameInput.parentElement.querySelector('p').innerHTML = ""
            nameInput.parentElement.querySelector('p').style.visibility = "hidden"
        }
        
    })
    
    
    passInput.addEventListener('keyup',()=>{
        if(passInput.value === ''){
            passInput.style.border = "1px solid red"
            passInput.parentElement.querySelector('p').innerHTML = " password cannot be empty"
            passInput.parentElement.querySelector('p').style.visibility = "visible"
        }
        else{
            passInput.style.border = ""
            passInput.parentElement.querySelector('p').innerHTML = ""
            passInput.parentElement.querySelector('p').style.visibility = "hidden"
        }
        
    })
    
}


},[])




function submitForm(e){
    e.preventDefault()
    
    
    const form = {name,email,password}
    console.log(form)
    
    Axios.post('api/register',form)
    .then(json=>{
        message.success('User Successfully Registered')
        setTimeout(()=>{
            history.push('/login')
        },2000)
        
      
    })
    .catch(error=>{
        console.log(error)
    })

}

    return (
        
                <div className="login" style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
                    <div className="overlay"></div>
           {auth && auth.user.name? <Redirect to="/" /> :
           
           <form >
           <h1>Sign Up</h1>
                <div>
                   <label htmlFor="name">UserName:</label>
                   <input type="text" placeholder="e.g. RamenKing23" name="name"  onChange={(event)=>setName(event.target.value)}/>
                   <p className="email-error"></p>
               </div>
           
               <div>
                   <label htmlFor="email">Email:</label>
                   <input type="text" placeholder="abc123@example.com" name="email"  onChange={(event)=>setEmail(event.target.value)}/>
                   <p className="email-error"></p>
               </div>
               
               <div>
                   <label htmlFor="password">Password:</label>
                   <input type="password" placeholder="e.g pass123 " name="password" onChange={(event)=>setPassword(event.target.value)}/>
                   <p className="password-error"></p>
               </div>

               <small><Link to="/login">Already have an account?</Link></small>
               
               <button href="#" className="signin-button" onClick={(e)=>submitForm(e)} >Sign up</button>
               
           </form>}
          
       </div>
       
    )
}

export default Register
