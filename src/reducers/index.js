const initialState = {
	books: [ { title: 'War and peace', author: 'alex', id: 1 } ]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BOOKS_LOADED':
			return {
				books: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
