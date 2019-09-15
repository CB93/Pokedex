import React, { Component } from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';

class Pokedex extends Component {
	constructor(props) {
		super(props);
			this.state = {
				pokedexData : [],
				isLoaded : false
			} 
	  }


	componentDidMount() {
    axios.get("http://127.0.0.1:4000/")
	  .then(
		  (result) => {
			this.setState({
			pokedexData : result,
            isLoaded : true
		  });
		})
	}

    shouldComponentUpdate(nextProps, nextState) {
		return (this.state.pokedexData !== nextState.Pokedex)
	}


	render() {
		let {isLoaded, pokedexData} = this.state;

		if (!isLoaded) {
			return ( 
				<div>
					<h1>Loading</h1>
      			</div>
			)
		} else {
			return ( 
				<div>
					{pokedexData.data.map(ui => {
						return 	<Pokecard 
									key={ui._id} 
									name={ui.Name}
									generation={ui.Generation}/>
						})
					}
				</div>
			)
		}
  	}
}


export default Pokedex;