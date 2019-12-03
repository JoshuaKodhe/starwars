import React from 'react';
import CardList from './CardList';
import { people } from './people';

const App = () => {
	return (
		<React.Fragment>
			<h1>Starwars Characters</h1>
			<CardList people={people} />
		</React.Fragment>
	);
};

export default App;
