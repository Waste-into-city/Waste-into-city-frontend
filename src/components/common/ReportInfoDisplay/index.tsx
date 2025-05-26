import { MouseEventHandler, TouchEventHandler } from 'react';

import { getImageUriByName } from '@/constants/apiEndpoints';
import { NO_DESCRIPTION } from '@/constants/labels';
import { WorkReport } from '@/types/contracts/workReport';

import { getUserByString } from './helpers';
import * as S from './styled';

export const ReportInfoDisplay = ({ report }: { report: WorkReport }) => {
	const { imageNames, title, description, fromUserEmail, fromUserNickname } =
		report;

	const handleImagesScroll: MouseEventHandler & TouchEventHandler = (
		event
	) => {
		event.stopPropagation();
	};

	return (
		<S.ReportInfoWrapper
			onMouseMove={handleImagesScroll}
			onTouchMove={handleImagesScroll}
		>
			<h2>{title}</h2>
			<p>{getUserByString(fromUserNickname, fromUserEmail)}</p>
			<p>{description || NO_DESCRIPTION}</p>
			<S.ReportImagesWrapper>
				{imageNames.map((imageName) => (
					<img key={imageName} src={getImageUriByName(imageName)} />
				))}
			</S.ReportImagesWrapper>
		</S.ReportInfoWrapper>
	);
};
