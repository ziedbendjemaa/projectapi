import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { handeldelte } from '../redux/action'
import Edit from './Edit'

const ListCard = ({data}) => {
    const dispatch = useDispatch()
    return (
      
           <Card style={{ width: '18rem', color:"black" }} className=" m-3">
           <avatar >{data.name[0]}</avatar>
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>
      {data.country}
      <p>{data.domains}</p>
    </Card.Text>
  
<div style={{display:"flex"}}> 
    <button style={{backgroundColor:"#0C6EFD",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>dispatch(handeldelte(data.name))}>delete</button>
    <Edit data={data}/>
  </div>
  </Card.Body>
</Card>
        
    )
}

export default ListCard
