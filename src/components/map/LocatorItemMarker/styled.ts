import styled from 'styled-components';

export const MapPinMarker = styled.img(({ theme }) => ({
	width: theme.sizes.workMarker,
	height: theme.sizes.workMarker,
	filter: theme.colors.iconNegative,
	margin: '-100% 0 0 -50%',
}));

export const MapPinCenter = styled(MapPinMarker)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	margin: 0,
	marginTop: `-${theme.indent.small}`,
}));
