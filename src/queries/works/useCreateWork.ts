import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { WorkInfoFormValues } from '@/components/common/WorkInfoForm/types';
import { WORK_APPLICATION_CREATE_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { getTrashTypeId } from '@/utils/getTrashTypeId';

import { uploadImage } from '../uploadImage';

export const useCreateWork = (
	options: UseMutationOptions<void, Error, WorkInfoFormValues> = {}
) =>
	useMutation({
		...options,
		mutationFn: async ({
			title,
			description,
			attachments,
			complexity,
			trashTypes,
			location,
		}: WorkInfoFormValues) => {
			const attachmentPromises = attachments
				.filter(({ file }) => file !== null)
				.map(({ file }) =>
					file ? uploadImage(file) : Promise.resolve(null)
				);
			const imageNames = await Promise.all(attachmentPromises);

			const response = await fetchWithAuth(WORK_APPLICATION_CREATE_URI, {
				method: 'POST',
				body: JSON.stringify({
					title,
					description,
					workComplexityId: complexity,
					trashTypeIds: trashTypes.map(getTrashTypeId),
					imageNames,
					...location,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error();
			}
		},
	});
