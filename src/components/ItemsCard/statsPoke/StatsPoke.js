import {pathOr} from 'ramda';

const StatsPoke = ({statsP}) => {
	const hp = pathOr(0, [0, 'base_stat'], statsP);
	const attack = pathOr(0, [1, 'base_stat'], statsP);
	const defense = pathOr(0, [2, 'base_stat'], statsP);
	const specialAttack = pathOr(0, [3, 'base_stat'], statsP);
	const specialDefense = pathOr(0, [4, 'base_stat'], statsP);
	const speed = pathOr(0, [5, 'base_stat'], statsP);

	return (
		<div className='statsPoke'>
			<div className='itemStat'>Hp: {hp}</div>
			<div className='itemStat'>Speed: {speed}</div>
			<div className='itemStat'>Attack: {attack}</div>
			<div className='itemStat'>Defense: {defense}</div>
			<div className='itemStat'>Special Attack: {specialAttack}</div>
			<div className='itemStat'>Special Defense: {specialDefense}</div>
		</div>
	);
};

export default StatsPoke;
