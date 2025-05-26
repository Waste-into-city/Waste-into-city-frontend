import { Dispatch, SetStateAction } from 'react';

import { TRASH_ICONS } from '@/constants/icons';
import { TrashTypes } from '@/types/trashTypes';

import * as S from './styled';

export const WorkTrashTypesSelector = ({
	trashTypes,
	setTrashTypes,
}: {
	trashTypes: Array<TrashTypes>;
	setTrashTypes: Dispatch<SetStateAction<Array<TrashTypes>>>;
}) => {
	const handleTrashTypeClick = (trashType: TrashTypes) => () => {
		setTrashTypes((prevTrashTypes) =>
			prevTrashTypes.includes(trashType)
				? prevTrashTypes.filter(
						(currentTrashType) => currentTrashType !== trashType
					)
				: [...prevTrashTypes, trashType]
		);
	};

	return (
		<S.TrashTypesWrapper>
			{Object.values(TrashTypes).map((trashType) => (
				<S.TrashTypeItem
					key={trashType}
					$isSelected={trashTypes.includes(trashType)}
					src={TRASH_ICONS[trashType as keyof typeof TrashTypes]}
					onClick={handleTrashTypeClick(trashType)}
				/>
			))}
		</S.TrashTypesWrapper>
	);
};
