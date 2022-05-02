import React from 'react'
import {useSelector} from 'react-redux'
import PlantItem from './PlantItem'

function Product() {
const plants = useSelector(globalState => globalState.plants)
console.log(plants)
return (
<div>

  <PlantItem />
    

   


</div>
      
)}

export default Product