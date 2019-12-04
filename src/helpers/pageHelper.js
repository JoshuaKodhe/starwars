export const currentPage = url => {
	if (url) {
		let urlMatch = url.match(/\?page=\d+/g)[0];
		if (urlMatch) {
			let pageNumber = urlMatch.split('=')[1] - 1;
			return pageNumber;
		}
	}
};
