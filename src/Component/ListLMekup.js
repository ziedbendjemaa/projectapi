import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import NAVBAR from './NAVBAR'


const ListLMekup = () => {
    const movie = useSelector(state => state.allmovie.movie)
    const [text, setText] = useState("")
    return (
        <div>
            <NAVBAR text={text} setText={setText} />
        <div className="container">
        <div className="row ml-5">
           {
          movie.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())).map(el=><FoodCard mov={el}/>) 
               

           }
        </div>
        </div>
        </div>
    )
}

export default ListLMekup
