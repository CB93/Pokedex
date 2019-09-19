import React, { Component } from 'react';
import api from '../api/api'
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
    	return (
			<div>
				<Card>
					<CardImg src={api.pokemonPhoto(this.state.name)} alt="Pokemon Card" />
        			<CardBody>
          				<CardTitle>{this.state.name}</CardTitle>
          				<CardSubtitle>{this.state.number}</CardSubtitle>
          				<CardText></CardText>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Pokecard;