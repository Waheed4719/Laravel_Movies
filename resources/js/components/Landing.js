import React from 'react'
import { Link } from 'react-router-dom'
import './../../sass/body.scss'
import image from './../assets/coverImage2.jpg'
import movie from './../assets/antenna.png'


function Landing() {
    return (
        <div className="landing  text-center " style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
           <div className="overlay"></div>
       
        <div>
        <h1>Laravel Movies</h1>
            <h2><Link to="/films">Check out Films</Link></h2>
            <div>
            <img src ={movie}  />
            </div>
            <h3>More Content Coming Soon...</h3>
        </div>
        </div>
    )
}

export default Landing
