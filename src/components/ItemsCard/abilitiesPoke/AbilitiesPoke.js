import React, {useEffect, useState} from 'react';

const AbilitiesPoke = ({abilitiesP}) => {
	const [abilitiesPoke, setAbilitiesPoke] = useState([]);

	useEffect(() => {
		if (abilitiesP) {
			setAbilitiesPoke(abilitiesP);
		}
	}, [abilitiesP]);

	if (abilitiesPoke.length) {
		return (
			<div className='abilitiesPoke'>
				{abilitiesPoke.map((i, e) => (
					<div key={e} className='itemAbilities'>
						{i.ability.name}
					</div>
				))}
			</div>
		);
	}

	return;
};

export default AbilitiesPoke;
