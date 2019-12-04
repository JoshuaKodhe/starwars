import React, { Component } from 'react';
import CardList from './CardList';
import Pagination from './pagination';
import { currentPage } from './helpers/pageHelper';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			currentPage: null,
			nextPage: null,
			total: null,
		};
	}
	componentDidMount() {
		fetch('https://swapi.co/api/people/')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({
					people: data.results,
					currentPage: currentPage(data.next),
					total: data.count,
				});
			});
	}

	render() {
		return (
			<div className='app'>
				<h1>Starwars Characters</h1>
				<CardList people={this.state.people} />
				<Pagination />
			</div>
		);
	}
}

export default App;
