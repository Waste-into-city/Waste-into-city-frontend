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

		@media ${theme.media.landscape} and ${theme.media.laptop} {
			justify-content: flex-end;
		}

		@media ${theme.media.portrait} {
			align-items: flex-start;
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

		position: relative;

		@media ${theme.media.tablet} {
			padding: ${theme.indent.large} ${theme.indent.medium};
		}

		@media ${theme.media.portrait} {
			margin-top: ${theme.indent.large};
			width: ${theme.sizes.nearFull};
			height: ${theme.sizes.interactionSectionMin};

			@media ${theme.media.smallHeight} {
				height: ${theme.sizes.interactionSectionMin};
				margin-top: ${theme.indent.medium};
			}
		}

		@media ${theme.media.landscape} {
			height: ${theme.sizes.nearFull};
			@media ${theme.media.laptop} {
				margin-right: ${theme.indent.large};
			}
			@media ${theme.media.tablet} {
				margin-right: ${theme.indent.medium};
				width: ${theme.sizes.interactionSectionMin};
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
		top: ${theme.indent.medium};
		right: ${theme.indent.medium};

		position: absolute;
		padding: 0;
	`}
`;

export const SectionContentContainer = styled.div`
	${({ theme }) => css`
		width: ${theme.widths.full};
		height: ${theme.heights.full};
		padding: ${theme.indent.small};

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
