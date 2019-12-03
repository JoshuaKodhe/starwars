import React from 'react';
import Card from './card';

const CardList = ( {people})=>{
  return (	<React.Fragment>
		<Card
			id={people[0].id}
			name={people[0].name}
			height={people[0].height}
			mass={people[0].mass}
			hairColor={people[0].hair_color}
			skinColor={people[0].skin_color}
			eyeColor={people[0].eye_color}
			birthYear={people[0].birth_year}
			gender={people[0].gender}
		/>
		<Card
			id={people[1].id}
			name={people[1].name}
			height={people[1].height}
			mass={people[1].mass}
			hairColor={people[1].hair_color}
			skinColor={people[1].skin_color}
			eyeColor={people[1].eye_color}
			birthYear={people[1].birth_year}
			gender={people[1].gender}
		/>
		<Card
			id={people[2].id}
			name={people[2].name}
			height={people[2].height}
			mass={people[2].mass}
			hairColor={people[2].hair_color}
			skinColor={people[2].skin_color}
			eyeColor={people[2].eye_color}
			birthYear={people[2].birth_year}
			gender={people[2].gender}
		/>
		<Card
			id={people[3].id}
			name={people[3].name}
			height={people[3].height}
			mass={people[3].mass}
			hairColor={people[3].hair_color}
			skinColor={people[3].skin_color}
			eyeColor={people[3].eye_color}
			birthYear={people[3].birth_year}
			gender={people[3].gender}
		/>
	</React.Fragment>);
};


export default CardList;
