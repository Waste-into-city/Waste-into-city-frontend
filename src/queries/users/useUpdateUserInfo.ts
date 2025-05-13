import { useMutation } from '@tanstack/react-query';

import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const useUpdateUserInfo = () =>
	useMutation({
		mutationFn: async () => {
			const response = await fetchWithAuth(``, {
				method: 'POST',
			});

			if (!response.ok) {
				throw new Error();
			}
		},
	});
