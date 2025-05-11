import { MouseEventHandler, TouchEventHandler } from 'react';

import { WorkReport } from '@/types/contracts/workReport';

import * as S from './styled';

export const ReportInfoDisplay = ({ report }: { report: WorkReport }) => {
	const { imageNames, title, description } = report;

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
			<p>{description}</p>
			<S.ReportImagesWrapper>
				{imageNames.map((imageName) => (
					<img key={imageName} src={imageName} />
				))}
			</S.ReportImagesWrapper>
		</S.ReportInfoWrapper>
	);
};
