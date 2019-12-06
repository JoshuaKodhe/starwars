import React, { Component } from 'react';
import CardList from './CardList';
import Pagination from './pagination';
import { currentPage, range } from './helpers/pageHelper';
import { LEFT_PAGE, RIGHT_PAGE } from './constants/constants';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			currentPage: null,
			peoplePerPage: null,
			totalRecords: null,
			pageNeigbours: 0,
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
				...this.state,
				people: data.results,
				currentPage: currentPage(data.next),
				peoplePerPage: data.results.length,
				totalRecords: data.count,
			});
		} catch (err) {
			console.log(err);
		}
	};

	moveToPage = event => {
		let pageNumber = event.target.id;
		this.getPage(pageNumber);
	};

	getPage = async pageNumber => {
		let response = await fetch(
			`https://swapi.co/api/people/?page=${pageNumber}`,
		);
		const data = await response.json();
		console.log(data);
		this.setState({
			...this.state,
			people: data.results,
			currentPage: currentPage(data.next),
		});
	};

	render() {
		const currentPage = this.state.currentPage;
		let totalPages = Math.ceil(
			this.state.totalRecords / this.state.peoplePerPage,
		);
		let pageNeigbours =
			typeof this.state.pageNeigbours === 'number'
				? Math.max(0, Math.min(this.state.pageNeighbours, 2))
				: 0;

		let getPageNumbers = () => {
			const displayedPages = pageNeigbours * 2 + 3;
			const totalBlocks = displayedPages - 2;

			if (totalPages > totalBlocks) {
				const startPage = Math.max(2, currentPage - pageNeigbours);
				const endPage = Math.min(totalPages - 1, currentPage + pageNeigbours);
				let pages = range(startPage, endPage);

				const hasLeftSpill = startPage > 2;
				const hasRightSpill = totalPages - endPage > 1;
				const spillOffset = displayedPages - (pages.length + 1);

				switch (true) {
					// handle: (1) < {5 6} [7] {8 9} (10)
					case hasLeftSpill && !hasRightSpill: {
						const extraPages = range(startPage - spillOffset, startPage - 1);
						pages = [LEFT_PAGE, ...extraPages, ...pages];
						break;
					}
					// handle: (1) {2 3} [4] {5 6} > (10)
					case !hasLeftSpill && hasRightSpill: {
						const extraPages = range(endPage + 1, endPage + spillOffset);
						pages = [...pages, ...extraPages, RIGHT_PAGE];
						break;
					}
					// handle: (1) < {4 5} [6] {7 8} > (10)
					case hasLeftSpill && hasRightSpill:
					default: {
						pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
						break;
					}
				}
				return [1, ...pages, totalPages];
			}
			return range(1, totalPages);
		};

		let paginationProps = {
			currentPage: currentPage,
			peoplePerPage: this.state.peoplePerPage,
			totalRecords: this.state.totalRecords,
			moveToPage: this.moveToPage,
			pages: getPageNumbers(),
			totalPages: totalPages,
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
