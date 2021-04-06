import React from 'react'
import data from '../products'
const ProductDetails = ({match}) => {

   const filtredData = data.filter(el => el.id == match.params.id)

    return (
        <div>

       <h1>{filtredData[0].name}</h1>
       <h4>{filtredData[0].price}</h4>



            
        </div>
    )
}

export default ProductDetails
