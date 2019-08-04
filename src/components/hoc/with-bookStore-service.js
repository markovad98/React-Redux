import React from 'react';
import { BookStoreServiceConsumer } from '../bookStore-service-context';

const withBooksStoreService = () => (Wrapped) => {
	return (props) => {
		return (
			<BookStoreServiceConsumer>
				{(bookStoreService) => {
					return <Wrapped {...props} bookStoreService={bookStoreService} />;
				}}
			</BookStoreServiceConsumer>
		);
	};
};

export default withBooksStoreService;
