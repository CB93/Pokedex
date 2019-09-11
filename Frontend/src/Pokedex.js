import React, { Component } from 'react';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hand: this.props.hand,
            exp: this.props.exp,
            isWinner: this.props.isWinner  
        };
    }

    render() {
        return <div>{this.state.exp}</div>
    }
}

export default Pokedex;