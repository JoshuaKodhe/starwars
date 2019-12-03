import React from 'react';
import Card from './card';
import uuid from 'uuid/v4';

const CardList = ({ people }) => {
	const cardComponent = people.map((person, _) => {
		return (
			<Card
				key={uuid()}
				name={person.name}
				height={person.height}
				mass={person.mass}
				hairColor={person.hair_color}
				skinColor={person.skin_color}
				eyeColor={person.eye_color}
				birthYear={person.birth_year}
				gender={person.gender}
			/>
		);
	});
	return <React.Fragment> {cardComponent} </React.Fragment>;
};

export default CardList;
