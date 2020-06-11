import React from 'react'
import {Link} from 'react-router-dom'
import slugify from 'slugify'

function AllFilms({currentFilms}) {
    return (
        <div >
            <div style={{display:'flex',flexFlow:'wrap',justifyContent:'center'}}>
            {currentFilms && 
            currentFilms.map((dat,index)=>
            <Link className="filmCard" key={index} to={{pathname: '/films/'+slugify(dat.name), state: {id:dat.id}}}>
            <div  style={{margin:'10px'}}> 
            <img src={"/images/"+dat.photo}  height="320" width="240"/>
            </div>
            </Link>
            )}
            </div>
        </div>
    )
}

export default AllFilms
