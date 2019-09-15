import React, { Component } from 'react';



class Pokecard extends Component {
	constructor(props) {
		super(props);
			this.state = {
                name : this.props.name,
                generation: this.props.generation
			} 
	  }
render() {
    return <li>{this.state.name}{this.state.generation}</li>
}
}

export default Pokecard;