import { Accordion } from '@/components/ui/Accordion';

import {
	adminPanelFieldsKeys,
	SCORE_SETTINGS_DESCRIPTIONS,
	SCORE_SETTINGS_SHORT_NAMES,
} from '../constants';

import * as S from './styled';

export const AdminPanelFieldDescriptions = () => {
	return (
		<Accordion header='Descriptions'>
			<S.ScoreSettingsList>
				{adminPanelFieldsKeys.map((fieldName) => (
					<S.ScoreSettingDescription key={fieldName}>
						<h3>{SCORE_SETTINGS_SHORT_NAMES[fieldName]}</h3>
						<p>{SCORE_SETTINGS_DESCRIPTIONS[fieldName]}</p>
					</S.ScoreSettingDescription>
				))}
			</S.ScoreSettingsList>
		</Accordion>
	);
};
