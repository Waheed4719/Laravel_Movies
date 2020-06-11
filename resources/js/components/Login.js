import React, {useState,useEffect} from 'react'
import './../../sass/Login.scss'
import {Link, useHistory, Redirect} from 'react-router-dom'
import {login} from './../actions/authActions'
import {useDispatch, useSelector} from 'react-redux'
import image from './../assets/coverImage2.jpg'


function Login() {

const dispatch = useDispatch()  
const auth = useSelector(state => state.auth)
const history = useHistory();
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [errors,setErrors] = useState(auth.errors)




useEffect(()=>{

    var nameInput = document.querySelector('.userInput')
    var passInput = document.querySelector('.password')

    if(nameInput && passInput){
        nameInput.addEventListener('keyup',()=>{
        
            if(nameInput.value === ''){
                nameInput.style.border = "1px solid red"
                nameInput.parentElement.querySelector('p').innerHTML = " email field cannot be empty"
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
                passInput.parentElement.querySelector('p').innerHTML = " password field cannot be empty"
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

useEffect(() => {
    var nameInput = document.querySelector('.userInput')
    var passInput = document.querySelector('.password')
        if(auth.errors.message){
            if(auth.errors.message.email){
                nameInput.parentElement.querySelector('p').innerHTML = auth.errors.message.email
                nameInput.parentElement.querySelector('p').style.visibility = "visible"
            }
            if(auth.errors.message.password){
                passInput.parentElement.querySelector('p').innerHTML = auth.errors.message.password
                passInput.parentElement.querySelector('p').style.visibility = "visible"
            }
            if(auth.errors.message === 'invalid email or password'){
                nameInput.parentElement.querySelector('p').innerHTML = auth.errors.message
                nameInput.parentElement.querySelector('p').style.visibility = "visible"
            }
        }

    
    
}, [auth.errors])



function submitForm(e){
    e.preventDefault()
    
    const email = username;
    const form = {email,password}
    
    dispatch(login(form,history))

}


    return (
        <div className="login" style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
            <div className="overlay"></div>
           {auth && auth.user.name? <Redirect to="/" /> :
            
            <form >
            <h1>Sign in</h1>
            
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="userInput" name="username" placeholder="hello@example.com" onChange={(event)=>setUsername(event.target.value)}/>
                    <p className="username-error">hello</p>
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" name="password" placeholder="example123" onChange={(event)=>setPassword(event.target.value)}/>
                    <p className="password-error">hello</p>
                </div>
                <small><Link to="/register">Don't have an account?</Link></small>
                <button href="#" className="signin-button" onClick={(e)=>submitForm(e)} >Sign in</button>
                
            </form>
}
        </div>
    )
}

export default Login
