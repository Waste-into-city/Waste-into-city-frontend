import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.fullScreen};
	`}
`;
