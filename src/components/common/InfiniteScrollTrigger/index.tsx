import { memo, useRef } from 'react';

import { TRIGGER_THRESHOLD } from './constants';
import * as S from './styled';
import { InfiniteScrollTriggerProps } from './types';

export const InfiniteScrollTrigger = memo(
	({ onReach, isLoading }: InfiniteScrollTriggerProps) => {
		const observerRef = useRef<IntersectionObserver>(null);

		const triggerRef = (node: HTMLDivElement) => {
			if (isLoading || !node) {
				return;
			}

			if (observerRef.current) {
				observerRef.current.disconnect();
			}

			observerRef.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && !isLoading) {
						onReach();
					}
				},
				{
					rootMargin: TRIGGER_THRESHOLD,
				}
			);

			observerRef.current.observe(node);
		};

		return (
			<S.TriggerLoaderWrapper ref={triggerRef}>
				{isLoading && <S.Loader />}
			</S.TriggerLoaderWrapper>
		);
	}
);
