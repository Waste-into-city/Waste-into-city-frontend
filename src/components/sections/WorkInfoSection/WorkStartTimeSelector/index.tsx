import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
	HOURS_IN_DAY,
	hoursItems,
	MIN_HOUR_DIFFERENCE,
	MINUTES_IN_HOUR,
	minutesItems,
	SELECTOR_HEADING,
	TODAY_LABEL,
	TOMMRORW_LABEL,
} from './constants';
import { checkForNextDay, getTimeValue } from './helpers';
import * as S from './styled';

export const WorkStartTimeSelector = ({
	onTimeChange,
}: {
	onTimeChange: Dispatch<SetStateAction<Date | null>>;
}) => {
	const [hours, setHours] = useState(
		new Date().getHours() + MIN_HOUR_DIFFERENCE
	);
	const [minutes, setMinutes] = useState(new Date().getMinutes());
	const [dayLabel, setDayLabel] = useState<string>();

	const handleHoursChange = (value: string) => {
		setHours(Number(value));
	};

	const handleMinutesChange = (value: string) => {
		setMinutes(Number(value));
	};

	useEffect(() => {
		const currentDate = new Date();
		currentDate.setHours(hours);
		currentDate.setMinutes(minutes);
		currentDate.setSeconds(0);

		if (checkForNextDay(hours, minutes)) {
			currentDate.setDate(currentDate.getDate() + 1);
			setDayLabel(TOMMRORW_LABEL);
		} else {
			setDayLabel(TODAY_LABEL);
		}

		onTimeChange(currentDate);
	}, [hours, minutes, onTimeChange]);

	return (
		<>
			<S.SelectorHeading>{SELECTOR_HEADING}</S.SelectorHeading>
			<S.WorkStartTimeSelectorWrapper>
				<S.TimeDropdown
					items={hoursItems}
					label='Hours'
					handleChange={handleHoursChange}
					transformValue={getTimeValue(HOURS_IN_DAY - 1)}
					value={hours}
				/>
				<S.TimeDropdown
					items={minutesItems}
					label='Minutes'
					handleChange={handleMinutesChange}
					transformValue={getTimeValue(MINUTES_IN_HOUR - 1)}
					value={minutes}
				/>
				<p>{dayLabel}</p>
			</S.WorkStartTimeSelectorWrapper>
		</>
	);
};
