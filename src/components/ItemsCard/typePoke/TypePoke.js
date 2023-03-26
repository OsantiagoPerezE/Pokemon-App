import {useEffect, useState} from 'react';
import {pathOr} from 'ramda';

const TypePoke = ({typeP}) => {
	const [typeList, setTypeList] = useState([]);

	useEffect(() => {
		setTypeList(typeP);
	}, [typeP]);

	if (typeList.length) {
		return (
			<div className='typePoke'>
				{typeList?.map((i, e) => (
					<div key={e} className='itemType'>
						{pathOr('', ['type', 'name'], i)}
					</div>
				))}
			</div>
		);
	}

	return;
};

export default TypePoke;
