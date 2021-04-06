import React from 'react'
import {useHistory} from 'react-router-dom'

const Contact = () => {

    const history = useHistory() ;
    return (
        <div>
            <h1>Contact</h1>
           <button onClick={()=> history.goBack()}   >Go Back</button>
          <button onClick={() => history.push('/help')}   >Go Home</button>

        </div>
    )
}

export default Contact
