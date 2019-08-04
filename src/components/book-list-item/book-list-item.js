import React, { Component } from 'react';

export default class BookListItem extends Component {
	render() {
		const { book: { title, author, id } } = this.props;
		return (
			<div key={id}>
				{title} <span>{author}</span>{' '}
			</div>
		);
	}
}
