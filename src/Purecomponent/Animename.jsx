import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Animename extends Component {
    render() {
        console.log("Anime Name is rendered.");
        return (
            <div>
                 <p>
        Anime Name: <strong>{this.props.title}</strong>
                </p>
            </div>
        );
    }
}



export default Animename;