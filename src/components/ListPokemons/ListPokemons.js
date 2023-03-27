import {useEffect, useState} from 'react';
import axios from 'axios';
import CardList from '../CardList/CardList';

const ListPokemons = () => {
	const [urlPoke, setUrlPoke] = useState([]);

	useEffect(() => {
		if (!urlPoke.length) {
			axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
				setUrlPoke(response.data.results);
			});
		}
	}, []);

	return (
		<div className='container'>
			<div className='content'>
				{urlPoke.map((i, e) => (
					<CardList urlPoke={i.url} key={e} />
				))}
			</div>
		</div>
	);
};

export default ListPokemons;
