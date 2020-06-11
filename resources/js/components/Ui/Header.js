
import React, {useEffect,useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './../../../sass/header.scss'
import { useSelector,useDispatch } from 'react-redux'
import {Menu, Dropdown, Modal} from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { logout } from '../../actions/authActions'
import prof from './../../assets/rocket.png'


function Header(){


const history = useHistory()
const auth = useSelector(state=>state.auth)
const dispatch = useDispatch()
const [path,setPath] = useState(window.location.pathname)

function logOut(e){
  e.preventDefault
  dispatch(logout(history))  
}



useEffect(() => {
  
  history.listen((location)=>{    
    setPath(location.pathname)
  })
  
}, [history])


var menu = null
if(auth && auth.isAuthenticated){
 menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="#" onClick={(e)=>logOut(e)} >Logout</Link>
      </Menu.Item>
      
    </Menu>
  );
}

else{
  menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="!#">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  )
}


return(
  <div>
      <nav className='header'>
          <Link className='brand' to='/'>Laravel <span style={{color: "#FF5353"}}>Movies</span></Link>
          <Link className={`${path === '/films'? 'active':''}`}  to='/films'>Films</Link>
         
           <Dropdown overlay={menu} trigger={['hover']}>
          <div className="avatar" style={{backgroundImage: "url("+ prof +")"}}></div>
          </Dropdown>
        
      </nav>
  </div>
      
)}

    export default Header