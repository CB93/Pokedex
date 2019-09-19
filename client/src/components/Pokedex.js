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
			console.log(pokedexData.data)
			return ( 
				<div>
					{pokedexData.data.map(pokemon => {
						return 	<Pokecard 
									key={pokemon._id} 
									name={pokemon.Name}
									number={pokemon.Number}/>
						})
					}
				</div>
			)
		}
  	}
}


export default Pokedex;