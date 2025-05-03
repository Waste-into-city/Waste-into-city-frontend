export const getParticipantsLabel = (participants: number) =>
	participants > 0
		? `${participants} participant${participants > 1 ? 's' : ''}`
		: 'No participants';
