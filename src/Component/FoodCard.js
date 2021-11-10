import React from 'react'
// import { Card,Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'



const FoodCard = ({mov}) => {

    return (
       
            
            
            
              <Card style={{ width: '18rem', color:"black" }} className=" m-3">
               {/* marginBottom: '20px',marginTop:"30px"}}> */}
                
<h6 style={{marginLeft:"20px"}}>{mov.product_type}</h6>
       <img  src={mov.image_link} alt="" />
          <p>
            {mov.name}
          </p>
          
       
      </Card>
           
            
          




    
      
    
  
      
       
       
    )
}

export default FoodCard
