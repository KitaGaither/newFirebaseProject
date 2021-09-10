import React from 'react'

const BootcampDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section bootcamp-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Bootcamp Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis suscipit odio unde rem facere, dignissimos illum doloribus delectus dolores molestias, iure debitis exercitationem nihil neque asperiores id repellat error?</p>
                </div>
                <div className="card-action gray lighten-4 gray-text">
                    <div>Posted by Kita G.</div>
                    <div>9/3/2021, 5pm</div>
                </div>
            </div>
        </div>
    )
}

export default BootcampDetails;
