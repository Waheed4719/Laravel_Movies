import React,{useState,useEffect} from 'react'
import DatePicker from 'react-datepicker'
import { CountryDropdown } from 'react-country-region-selector';
import { Rate, message } from 'antd';
import Axios from 'axios';
import './../../sass/createFilm.scss'
import dateFormat from 'dateformat'
import image from './../assets/coverImage2.jpg'
import placeholder from './../assets/placeholder.png'

function CreateFilm() {

    const [photo,setPhoto] = useState(null)
    const [release_date,setStartDate] = useState(new Date())
    const [country,setCountry] = useState('')
    const [rating,setRating] = useState(0)
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0.0)
    const [genre,setGenre] = useState('')
    const [ticket,setTicket] = useState(0)
    const [release,setRelease] = useState('Release')
    const [imageObject,setImageObject] = useState(null)

    const submitForm = e =>{
        e.preventDefault()
        if(!photo || !name || !country || !release_date || !genre || !description || !price || !ticket || !release || !rating){
            message.error("Fill up all the fields first!")
        }
        else{
            var releaseDate = dateFormat(release_date,"yy/mm/dd")
            const form = new FormData()
            form.append('photo',photo)
            form.append('name',name)
            form.append('description',description)
            form.append('country',country)
            form.append('rating',rating)
            form.append('price',price)
            form.append('genre',genre)
            form.append('release',release)
            form.append('ticket',ticket)
            form.append('release_date',releaseDate)
    
            
            Axios.post('/api/films',form)
            .then(obj=>message.success("Film Record Created!"))
            .catch(err=>console.log(err))
        }
     
    }

    const onChangeImage = (e)=>{
        e.preventDefault()
        setImageObject(URL.createObjectURL(e.target.files[0]))
        setPhoto(e.target.files[0])
    }

    return (
        <div className="createFilm" style={{backgroundImage:"url("+image+")",backgroundSize:'cover'}}>
            <div className="overlay"></div>
            <div className="container">
            <h1>Create Film Record</h1>
            <div style={{display:'flex',flexDirection:'column',}}>
            {imageObject? 
            <img  className="pb-2" src={imageObject} height="320" width="240" />:
            <img  className="pb-2" src={placeholder} height="320" width="240" />
            }
            <div className="custom-file col-md-6 ">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChangeImage}/>
                <label className="custom-file-label">Choose Movie Cover Image</label>
             </div>

             <h5 className="mt-2 ">Rating: </h5>
            <Rate value={rating}
             style={{color: "#FF5353"}}
             allowHalf defaultValue={2.5}
             onChange={rating=>{
                 console.log(rating)
                setRating(rating)}} />
            </div>
          

            <div className="pt-3">
                <form onSubmit={submitForm}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label >Title</label>
                    <input type="text" className="form-control" required placeholder="Title of the movie" onChange={e=>setName(e.target.value)}/>
                    </div>
                   
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label >Description</label>
                    <textarea type="text" className="form-control" required placeholder="Description of the movie..." onChange={e=>setDescription(e.target.value)}/>
                    </div>
                   
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                    <label >Genre</label>
                    <input type="text" className="form-control" required placeholder="Genre" onChange={e=>setGenre(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-4">
                    <label >Country</label>
                    <CountryDropdown
                    classes="form-control"
                        value={country}
                        onChange={(val) => setCountry(val)} />
                    </div>

                    <div className="form-group col-md-2">
                    <label >Price</label>
                    <input type="text" required className="form-control" placeholder="e.g $15" onChange={e=>setPrice(e.target.value)}/>
                    </div>

                    <div className="form-group col-md-2">
                    <label >Tickets</label>
                    <input type="text" required className="form-control" placeholder="e.g $15" onChange={e=>setTicket(e.target.value)}/>
                    </div>
                   
                </div>

                <div className="form-row">
                <div className="form-group col-md-2">
                    <label >Release Status</label>
                    <select className="form-control" onChange={e=>{
                        console.log(e.target.value)
                        setRelease(e.target.value)}}>
                    <option value="Released">Released</option>
                    <option value="Coming soon">Coming soon</option>
                    <option value="Cancelled">Cancelled</option>
                    </select>
                    </div>
                    <div className="form-group col-md-6 col-sm-12" style={{display:'flex',flexDirection:'column'}}>
                    <label >Release Date</label>
                    <DatePicker
                    selected={release_date} 
                    onChange={date => setStartDate(date)}
                    />
                    </div>
                    </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            </div>
 

               
       
        </div>
    )
}

export default CreateFilm
