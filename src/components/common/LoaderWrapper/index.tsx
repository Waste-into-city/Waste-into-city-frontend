import { ReactNode } from 'react';

import * as S from './styled';

export const LoaderWrapper = ({
	isLoaderVisible,
	children,
}: {
	isLoaderVisible: boolean;
	children: ReactNode;
}) => {
	return (
		<S.LoaderWrapperContainer>
			{children}
			{isLoaderVisible && (
				<S.LoaderBlur $isVisible={isLoaderVisible}>
					<S.LoaderSpinner />
				</S.LoaderBlur>
			)}
		</S.LoaderWrapperContainer>
	);
};

export default LoaderWrapper;
