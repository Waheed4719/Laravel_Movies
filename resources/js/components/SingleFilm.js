import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './../../sass/singleFilmPage.scss'
import dateFormat from 'dateformat'
import { Rate, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import prof from './../assets/rocket.png'
import { useSelector } from 'react-redux'


function SingleFilm(props) {

    const [singleFilm,setSingleFilm] = useState()
    const [loading, setLoading] = useState(true)
    const [date,setDate] = useState('')
    const auth = useSelector(state=>state.auth)
    const [comments,setComments] = useState([])
    const [comment,setComment] = useState('')

    const getSingleFilmData = async() =>{
        const res = await Axios.get('/api/films/'+props.location.state.id)
        console.log(res)
        setSingleFilm(res.data.film)
        setComments(res.data.comments)
        setDate(dateFormat(res.data.film.release_date,"mmmm dS, yyyy"))

        setLoading(false)
    }
    useEffect(()=>{
        setLoading(true)
       getSingleFilmData()

    },[props.match.params.name])


    const submitComment = async(e) =>{
        e.preventDefault()
        const form = new FormData()
        form.append('film_id', singleFilm.id)
        form.append('comment', comment)
        const res = await Axios.post('/api/films/comment',form)
        setComment('')
        message.success("Comment Posted Successfully")
        getSingleFilmData()
    }


    if(loading){
        return (
            <div className="singleFilmPage text-center "><h1> Loading... </h1></div>
        )
    }
    
    else{

    return (
        <div className="singleFilmPage text-center " style={{backgroundImage:"url(/images/"+singleFilm.photo+")",backgroundSize:'cover'}}>
            <div className="overlay"></div>
            <div className="filmDetails">
                <div>
                <h1 className="title">{singleFilm.name}</h1>
                </div>
                <div className="row">
                <div className="coverPhoto">
                <img  src={"/images/"+singleFilm.photo} />
                </div>

                <div className="infoCard">
                    <div className="overview">
                        <h3><span>O</span>VERVIEW</h3>
                    </div>
                    <div className="description">
                    <p>{singleFilm.description}</p>
                    </div>

                    <div className="otherInfo">
                        <div>
                            <p>Genre</p>
                            <p>{singleFilm.genre}</p>
                        </div>
                        <div>
                            <p>Country</p>
                            <p>{singleFilm.country}</p>
                        </div>
                        <div>
                            <p>Rating</p>
                            <p>{singleFilm.rating}/5<FontAwesomeIcon icon={['fas','star']} size="sm" color="red" className="mx-2 "/></p>
                        </div>
                        <div>
                            <p>Release Date</p>
                            <p>{date}</p>
                        </div>
                        <div>
                            <p>Release Status</p>
                            <p>{singleFilm.release}</p>
                        </div>
                        <div>
                            <p>Tickets</p>
                            <p>{singleFilm.ticket} Available</p>
                        </div>
                        <div>
                            <p>Price</p>
                            <p>${singleFilm.price}</p>
                        </div>
                     
                    </div>

                    <div className="btnDiv">
                        <a href="#"  className="buyTicket">Buy Tickets</a>
                    </div>
                </div>
                </div>
               


            </div>
     
            <div className="reviews">
                <h2>Reviews</h2>

                <div className="comments">
                {comments ? comments.map((com)=>
                     <div key={com.id}className="comments-row">
                     <img src={prof} className="avatar" />
                        
                        
                        <div  className="comment">
                            <p><small>{com.user.name} (User)</small></p>
                            <p>{com.comment}</p>
                        </div></div>):
                        <p>No Comments</p>
                        
                        }



                     
                </div>
                {auth && auth.isAuthenticated?<>
                <div className="commentBar">
                <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="post a comment/review"/>
                </div>

                <a onClick={submitComment} className="submitBtn">Submit</a></>:<Link to="/login">Login to comment</Link>}

            </div>
            
        </div>
    )}
}

export default SingleFilm
