import React from 'react';

const Card = ({
	name,
	height,
	mass,
	hairColor,
	skinColor,
	eyeColor,
	birthYear,
	gender,
}) => {
	return (
		<div className='dib br3 ba pa3 ma3 grow bw1 shadow-5 card'>
			<h3>
				Name: <span>{name}</span>
			</h3>

			<span>height: {height}</span>
			<br />
			<span>mass: {mass}</span>
			<br />
			<span>hair color: {hairColor}</span>
			<br />
			<span>skin color: {skinColor}</span>
			<br />
			<span>eye color: {eyeColor}</span>
			<br />
			<span>birth year: {birthYear}</span>
			<br />
			<span>gender: {gender}</span>
			<br />
		</div>
	);
};

export default Card;
