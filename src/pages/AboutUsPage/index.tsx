import logoIcon from '@/assets/icons/svg/recycle_logo.svg';
import woodsImage from '@/assets/images/jpg/city.jpeg';
import { ROUTES } from '@/constants/routes';

import {
	BOTTOM_SECTION_TEXT,
	JOIN_LINK_TEXT,
	TOP_SECTION_TEXT,
} from './constants';
import * as S from './styled';

export const AboutUsPage = () => {
	return (
		<S.AboutUsPageWrapper>
			<S.DescriptionContainer>
				<S.AboutUsTopImage src={woodsImage} />
				<S.TopDescriptionBlock>
					<img src={logoIcon} />
					<p>{TOP_SECTION_TEXT}</p>
					<a href={ROUTES.MAIN}>{JOIN_LINK_TEXT}</a>
				</S.TopDescriptionBlock>
			</S.DescriptionContainer>
			<S.DescriptionContainer>
				<S.BottomDescriptionBlock>
					{BOTTOM_SECTION_TEXT}
				</S.BottomDescriptionBlock>
			</S.DescriptionContainer>
		</S.AboutUsPageWrapper>
	);
};
