import React from 'react'

const Help = ({text , match}) => {
    return (
        <div>
            <h1>Help</h1>

            <p>{text}</p>

            <h3>{match.params.info}</h3>
        </div>
    )
}

export default Help
