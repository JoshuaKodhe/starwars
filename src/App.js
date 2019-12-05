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
			peoplePerPage: null,
			total: null,
		};
	}
	componentDidMount() {
		this.getPeople();
	}
	getPeople = async () => {
		try {
			let response = await fetch('https://swapi.co/api/people/');
			const data = await response.json();
			this.setState({
				people: data.results,
				currentPage: currentPage(data.next),
				peoplePerPage: data.results.length,
				total: data.count,
			});
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		let paginationProps = {
			currentPage: this.state.currentPage,
			peoplePerPage: this.state.peoplePerPage,
			total: this.state.total,
		};
		return (
			<div className='app'>
				<h1>Starwars Characters</h1>
				<CardList people={this.state.people} />
				<Pagination {...paginationProps} />
			</div>
		);
	}
}

export default App;
