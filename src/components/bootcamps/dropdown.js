import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                <div id="myDropdown" className="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                    <a href="#about">About</a>
                    <a href="#base">Base</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                    <a href="#custom">Custom</a>
                    <a href="#support">Support</a>
                    <a href="#tools">Tools</a>
                </div>
            </div>
        );
    }
}
export default Dropdown;