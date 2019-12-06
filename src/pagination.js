import React from 'react';
import { LEFT_PAGE, RIGHT_PAGE } from './constants/constants';

const Pagination = ({
	currentPage,
	totalRecords,
	moveToPage,
	totalPages,
	pages,
}) => {
	if (!totalRecords || totalPages === 1) return null;

	let renderPagination = pages.map((page, index) => {
		let activePage = currentPage === page ? 'active' : '';
		if (page === LEFT_PAGE) return <span key={index}>&laquo;</span>;
		if (page === RIGHT_PAGE) return <span key={index}>&raquo;</span>;
		return (
			<span key={index} id={page} className={activePage} onClick={moveToPage}>
				{page}
			</span>
		);
	});
	return <div className='pagination'>{renderPagination}</div>;
};

export default Pagination;
