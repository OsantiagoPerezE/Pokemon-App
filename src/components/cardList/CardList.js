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
import logoPoke from '../../assets/icon-pokeball.png';
import SeeMore from '../ItemsCard/seeMore/SeeMore';

const CardList = ({urlPoke}) => {
	const [info, setInfo] = useState();
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

	useEffect(() => {
		if (info) {
			console.log('info', info);
		}
	}, [info]);

	return (
		<div className='cardList'>
			<img className='iconPoke' src={logoPoke} />
			<div className='headerCard'>
				<NamePoke name={name} />
				<IdPoke idP={idP} />
				<TypePoke typeP={typeP} />
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
			<SeeMore idP={idP} />
		</div>
	);
};

export default CardList;
