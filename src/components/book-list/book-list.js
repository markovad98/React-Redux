import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import withBooksStoreService from '../hoc';

class BookList extends Component {
	componentDidMount() {
		const { booksStoreService } = this.props;
	}

	render() {
		const { books } = this.props;
		return (
			<ul>
				{books.map((book) => (
					<li>
						<BookListItem book={book} />
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = ({ books }) => {
	return { books };
};

export default withBooksStoreService()(connect(mapStateToProps)(BookList));
