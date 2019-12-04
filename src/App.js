import React, { Component } from 'react';
import CardList from './CardList';
import Pagination from './pagination';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
		};
	}
	componentDidMount() {
		fetch('https://swapi.co/api/people/')
			.then(res => res.json())
			.then(data => this.setState({ people: data.results }));
	}

	render() {
		return (
			<div className='app'>
				<h1>Starwars Characters</h1>
				<CardList people={this.state.people} />
        <Pagination/>
			</div>
		);
	}
}

export default App;
