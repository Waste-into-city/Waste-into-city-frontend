import styled, { css } from 'styled-components';

import { Button } from '@/components/ui/Button';
import { loaderCSS } from '@/styles/common/loader';
import { scrollbarCSS } from '@/styles/common/scrollbar';

export const SectionBlur = styled.div<{ $isSectionHidden: boolean }>`
	${({ theme, $isSectionHidden }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.full};
		z-index: ${theme.zIndexes.blur};
		background-color: ${theme.colors.backgroundBlur};
		animation: blur-background ${theme.transitions.medium};
		display: ${$isSectionHidden ? 'none' : 'flex'};

		position: absolute;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;

		@media ${theme.media.landscape} {
			@media ${theme.media.laptop} {
				justify-content: flex-end;
				padding-right: ${theme.indent.large};
			}
		}

		@media ${theme.media.portrait} {
			align-items: flex-start;
			padding-top: ${theme.indent.medium};
		}

		@keyframes blur-background {
			from {
				background-color: transparent;
			}
			to {
				background-color: ${theme.colors.backgroundBlur};
			}
		}
	`}
`;

export const InteractionSection = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.background};
		padding: ${theme.indent.interactionSection};
		border-radius: ${theme.borderRadius.round};
		animation: section-display ${theme.transitions.medium};
		width: ${theme.widths.interactionSection};
		display: flex;
		flex-direction: column;
		padding-top: ${theme.indent.medium};

		position: relative;

		@media ${theme.media.tablet} {
			padding: ${theme.indent.small} ${theme.indent.medium}
				${theme.indent.medium};
		}

		@media ${theme.media.portrait} {
			margin-top: ${theme.indent.medium};
			width: ${theme.sizes.nearFull};
			height: calc(100% - 170px);

			@media ${theme.media.smallHeight} {
				height: ${theme.sizes.interactionSectionMin};
				margin-top: ${theme.indent.medium};
			}
		}

		@media ${theme.media.landscape} {
			height: ${theme.sizes.nearFull};

			@media ${theme.media.laptop} {
				width: calc(100% - 189px);
				margin-right: ${theme.indent.large};
			}
			@media ${theme.media.tablet} {
				margin-right: ${theme.indent.medium};
			}
		}

		@keyframes section-display {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	`}
`;

export const CloseSectionButton = styled(Button)`
	${({ theme }) => css`
		align-self: flex-end;
		width: ${theme.sizes.loader};
		height: ${theme.sizes.loader};
		padding: 0;
	`}
`;

export const SectionContentContainer = styled.div`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.full};
		padding: ${theme.indent.medium};
		border: ${theme.borders.small} ${theme.colors.smallContrast};
		border-radius: ${theme.borderRadius.round};

		position: relative;
		overflow: auto;
		${scrollbarCSS}
	`}
`;

export const SectionLoader = styled.div`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.full};

		display: flex;
		justify-content: center;
		align-items: center;

		&:after {
			content: '';
			${loaderCSS(theme.colors.primary)}
			width: ${theme.sizes.sectionLoader};
			height: ${theme.sizes.sectionLoader};
		}
	`}
`;
