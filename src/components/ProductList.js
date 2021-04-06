import React from 'react'
import data from '../products'
import {Link} from 'react-router-dom'


const ProductList = () => {
    return (

<div>
    { data.map( (el,i) =>

<div key={i} class="card text-center">
  <div class="card-header">
    {el.price}
  </div>
  <div class="card-body">
    <h5 class="card-title">{el.name}</h5>
    
    <Link to={`/details/${el.id}`} class="btn btn-primary">More details</Link>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    )}
            
        </div>
    )
}

export default ProductList
