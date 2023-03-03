import React, { Component } from 'react';
import Animename from '../../src/Purecomponent/Animename';


class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: "Demon Slayer",
          isWatched: false,
        };
      }
    
      toggleResponse = () => {
        console.log("Toggled.");
        this.setState((previousState) => ({
          isWatched: !previousState.isWatched,
        }));
      };

    render() {
        const { title, isWatched } = this.state;
        return (
            <div>
                  <Animename title={title} />
        <p>
          Are You Intrested To Watch ?  {" "}
          <strong>{isWatched ? "YES" : "NO"}</strong>
        </p>
        <button onClick={this.toggleResponse} className="respond-btn"> Response from viewers</button>
            </div>
        );
    }
}



export default Review;
