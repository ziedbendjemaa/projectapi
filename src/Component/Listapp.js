

import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddCard from './AddCard'
import ListCard from './ListCard'
import NAVBAR from './NAVBAR'

const Listapp = () => {
   const photo = useSelector(state => state.allphoto.photo)
   
   const [text, setText] = useState("")
    return (
        <div>
            <NAVBAR text={text} setText={setText}/>
            <Link to={`/makeup/`}>
            <button>go_mekup</button>
            </Link>
        <div className="container">
        <div className="row ml-5">
            {
                photo.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())).map((el,i)=><ListCard data={el} key={i}/>)
            }
        </div>
        </div>
        <AddCard/>
        </div>
    )
}

export default Listapp
