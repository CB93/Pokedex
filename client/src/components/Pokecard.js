import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, 
  } from 'reactstrap';

  class Pokecard extends Component {
	constructor(props) {
		super(props);
			this.state = {
                name : this.props.name,
                number : this.props.number
			} 
	}
	render() {
		const name = this.state.name
		const pic = "https://img.pokemondb.net/artwork/large/" + name.toLowerCase() + ".jpg"
		console.log(pic)
    	return (
			<div>
				<Card>
					<CardImg top width="100%" src={pic} alt="Card image cap" />
        			<CardBody>
          				<CardTitle>{this.state.name}</CardTitle>
          				<CardSubtitle>{this.state.number}</CardSubtitle>
          				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Pokecard;