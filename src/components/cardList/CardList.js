import {useEffect, useState} from 'react';
import {pathOr} from 'ramda';
import axios from 'axios';
import NamePoke from '../ItemsCard/namePoke/NamePoke';
import ImagePoke from '../ItemsCard/imagePoke/ImagePoke';
import TypePoke from '../ItemsCard/typePoke/TypePoke';
import WeightPoke from '../ItemsCard/weightPoke/WeightPoke';
import HeightPoke from '../ItemsCard/heightPoke/HeightPoke';
import IdPoke from '../ItemsCard/idPoke/IdPoke';
import StatsPoke from '../ItemsCard/statsPoke/StatsPoke';
import AbilitiesPoke from '../ItemsCard/abilitiesPoke/AbilitiesPoke';

const CardList = ({urlPoke}) => {
	const [info, setInfo] = useState('');
	const [name, setName] = useState('');
	const [imageP, setImageP] = useState('');
	const [weight, setWeight] = useState(0);
	const [typeP, setTypeP] = useState([]);
	const [heightP, setHeightP] = useState(0);
	const [idP, setIdP] = useState(0);
	const [statsP, setStatsP] = useState([]);
	const [abilitiesP, setAbilitiesP] = useState([]);

	useEffect(() => {
		axios.get(urlPoke).then((response) => {
			console.log(response.data);
			setInfo(response.data);
		});
	}, [urlPoke]);

	useEffect(() => {
		setName(pathOr('', ['name'], info));
		setImageP(pathOr('', ['sprites', 'front_default'], info));
		setTypeP(pathOr('', ['types'], info));
		setWeight(pathOr(0, ['weight'], info));
		setHeightP(pathOr(0, ['height'], info));
		setIdP(pathOr(0, ['id'], info));
		setStatsP(pathOr([], ['stats'], info));
		setAbilitiesP(pathOr([], ['abilities'], info));
	}, [info]);

	return (
		<div className='cardList'>
			<div className='headerCard'>
				<NamePoke name={name} />
				<div>
					<IdPoke idP={idP} />
					<TypePoke typeP={typeP} />
				</div>
			</div>
			<ImagePoke imageP={imageP} />
			<div className='description'>
				<HeightPoke heightP={heightP} />
				<WeightPoke weight={weight} />
			</div>
			<div>
				<StatsPoke statsP={statsP} />
			</div>
			<div>
				<AbilitiesPoke abilitiesP={abilitiesP} />
			</div>
		</div>
	);
};

export default CardList;
