import axios from 'axios';
import {pathOr} from 'ramda';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AbilitiesPoke from '../ItemsCard/abilitiesPoke/AbilitiesPoke';
import HeightPoke from '../ItemsCard/heightPoke/HeightPoke';
import IdPoke from '../ItemsCard/idPoke/IdPoke';
import ImagePoke from '../ItemsCard/imagePoke/ImagePoke';

import NamePoke from '../ItemsCard/namePoke/NamePoke';
import StatsPoke from '../ItemsCard/statsPoke/StatsPoke';
import TypePoke from '../ItemsCard/typePoke/TypePoke';
import WeightPoke from '../ItemsCard/weightPoke/WeightPoke';

const CardDetail = () => {
	const [info, setInfo] = useState();
	const [name, setName] = useState('');
	const [imageP, setImageP] = useState('');
	const [weight, setWeight] = useState(0);
	const [typeP, setTypeP] = useState([]);
	const [heightP, setHeightP] = useState(0);
	const [idP, setIdP] = useState(0);
	const [statsP, setStatsP] = useState([]);
	const [abilitiesP, setAbilitiesP] = useState([]);
	const [movesP, setMovesP] = useState([]);

	useEffect(() => {
		if (info === undefined) {
			axios.get('https://pokeapi.co/api/v2' + window.location.pathname).then((response) => {
				setInfo(response.data);
			});
		}
	}, []);

	useEffect(() => {
		if (info !== undefined) {
			setName(pathOr('', ['name'], info));
			setImageP(pathOr('', ['sprites', 'front_default'], info));
			setTypeP(pathOr('', ['types'], info));
			setWeight(pathOr(0, ['weight'], info));
			setHeightP(pathOr(0, ['height'], info));
			setIdP(pathOr(0, ['id'], info));
			setStatsP(pathOr([], ['stats'], info));
			setAbilitiesP(pathOr([], ['abilities'], info));
			setMovesP(pathOr([], ['moves'], info));

			console.log('INFO = ', info);
		}
	}, [info]);
	// 	Normal
	// Fire
	// Water
	// Grass
	// Electric
	// Ice
	// Fighting
	// Poison
	// Ground
	// Flying
	// Psychic
	// Bug
	// Rock
	// Ghost
	// Dark
	// Dragon
	// Steel
	// Fairy

	return (
		<div className='containerCard'>
			<Link to='/'>Return</Link>
			<div className='contentCard'>
				<NamePoke name={name} />

				<IdPoke idP={idP} />

				<TypePoke typeP={typeP} />

				<ImagePoke imageP={imageP} />

				<HeightPoke heightP={heightP} />

				<WeightPoke weight={weight} />

				<StatsPoke statsP={statsP} />

				<AbilitiesPoke abilitiesP={abilitiesP} />
			</div>
		</div>
	);
};

export default CardDetail;
