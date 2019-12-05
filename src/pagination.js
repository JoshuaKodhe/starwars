import React from 'react';

const Pagination = ({ currentPage, peoplePerPage, total }) => {
	console.log('currentPage >>>', currentPage);
	console.log('peoplePerPage >>>', peoplePerPage);
	console.log('total >>>', total);

	const pageNumbers = [];
	let renderPageNumbers;
	if (total) {
		for (let page = 1; page <= Math.ceil(total / peoplePerPage); page++) {
			pageNumbers.push(page);
		}

		renderPageNumbers = pageNumbers.map(pageNumber => {
			let activePage = currentPage === pageNumber ? 'active' : '';
			return (
				<span key={pageNumber} className={activePage}>
					{pageNumber}
				</span>
			);
		});
	}
	return (
		<div className='pagination'>
			<span>&laquo;</span>
			{renderPageNumbers}
			<span>&raquo;</span>
		</div>
	);
};

export default Pagination;
