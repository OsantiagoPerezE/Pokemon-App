import {useState} from 'react';
import axios from 'axios';
import CardList from '../cardList/CardList';

const ListPokemons = () => {
	const [urlPoke, setUrlPoke] = useState([]);

	const hanldeIds = async () => {
		await axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
			setUrlPoke(response.data.results);
		});
	};
	if (!urlPoke.length) {
		return <div onClick={hanldeIds}>Start</div>;
	}

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
