import React, { Component } from 'react'

class CreateBootcamp extends Component {
        state = {
            bootcamp: '',
            id: '',
            description: '',
            length: '',
            price: ''
        }
        handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }
        render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="gray-text text-darken-3">Create a new Bootcamp!</h5>

                    <div className="input-field">
                        <label htmlFor="input-field"></label>
                        <input type="text" id="bootcamp name" onChange={this.handleChange} placeholder="Bootcamp Name"></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="bootcamp-id"></label>
                        <input type="text" id="bootcamp-id" onChange={this.handleChange} placeholder="ID of Bootcamp"></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="description"></label>
                        <input type="text" id="description" onChange={this.handleChange} placeholder="Description of Bootcamp"></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="length"></label>
                        <input type="text" id="length" onChange={this.handleChange} placeholder="Length of Bootcamp"></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="price"></label>
                        <input type="text" id="price" onChange={this.handleChange} placeholder="Price of Bootcamp"></input>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighten1 z-depth-0">Submit</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default CreateBootcamp
