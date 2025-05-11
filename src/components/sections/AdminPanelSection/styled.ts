import styled from 'styled-components';

export const AdminPanelWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.indent.large,
	width: theme.widths.full,
	height: theme.heights.full,
}));
