import styled from 'styled-components';

export const TrashTypesWrapper = styled.div(({ theme }) => ({
	display: 'flex',
	gap: theme.indent.small,
}));

export const TrashTypeItem = styled.img<{ $isSelected: boolean }>(
	({ theme, $isSelected }) => ({
		width: theme.sizes.listedTrashType,
		height: theme.sizes.listedTrashType,
		cursor: 'pointer',
		transition: theme.transitions.fast,
		filter: $isSelected
			? theme.colors.iconPrimary
			: theme.colors.iconContrast,
	})
);
