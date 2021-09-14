import React, { Component } from 'react';

class BootcampFind extends Component {
    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          isDropDownOpen: false
        };
    }
    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
        });
    }
    render() {
        return (
            <div class="container" onClick={this.toggleNav} >
                <div class="dropdown" isOpen={this.state.isDropDownOpen}>
                    <button class="btn btn-primary dropdown-toggle purple darken-4" id="menu1" type="button" data-toggle="dropdown">Find a bootcamp
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Bootcamps Over $1k</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Bootcamps Under $1k</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Bootcamps Over 4 Weeks</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Bootcamps Under 4 Weeks</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default BootcampFind;