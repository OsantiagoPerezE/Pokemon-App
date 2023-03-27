import React from 'react';
import {Link} from 'react-router-dom';
import Pokedex from '../../../assets/pokedex.png';

const SeeMore = ({idP}) => {
	return (
		<div className='more'>
			<Link to={`/pokemon/${idP}`}>
				<div className='moreLink'>
					<img src={Pokedex} width='140px' height='140px' />
				</div>
			</Link>
		</div>
	);
};

export default SeeMore;
