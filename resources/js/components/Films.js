import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import slugify from 'slugify'
import Pagination from './miniComponents/Pagination'
import AllFilms from './AllFilms'
import './../../sass/films.scss'
import image from './../assets/coverImage.jpg'
function Films() {

    const [films,setFilms] = useState([])
    const [loading, setLoading ] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [filmsPerPage,setFilmsPerPage] = useState(6)



    useEffect(()=>{

        const fetchData = async () =>
        {
                setLoading(true)
                const res = await Axios.get("/api/films")
                console.log(res.data)
                setFilms(res.data) 
                setLoading(false)
          
        }
        
        fetchData()
        
    },[])


  //Get current films
const indexOfLastFilm = currentPage * filmsPerPage
const indexOfFirstFilm = indexOfLastFilm - filmsPerPage
const currentFilms = films.slice(indexOfFirstFilm,indexOfLastFilm)

const paginate = (e,pageNumber) => {
    e.preventDefault()
    console.log(pageNumber)
    setCurrentPage(pageNumber)
}


if(loading){
    return (
        <div className=" films text-center" style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
            <h1> Loading... </h1></div>
    )
}

else{
    return (

        <div className="films " style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
            <div className="overlay"></div>
            <h1>All Films</h1>
       
        {(currentFilms.length>0)?
            <AllFilms currentFilms={currentFilms} />:
            <div>
                <h3>No Film Data Found!</h3>
                </div>
        }

            <Pagination
            filmsPerPage={filmsPerPage}
            totalFilms={films.length}
            paginate={paginate}
             /> 

            
            <div className="btnDiv">
            <Link className="createFilmBtn" to='/films/create'>Create Film</Link>

            </div>
        </div>
    )
}
}

export default Films
