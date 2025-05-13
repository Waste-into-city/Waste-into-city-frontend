import { UPLOAD_IMAGE_URI } from '@/constants/apiEndpoints';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const uploadImage = async (
	imageFile: File,
	fileName: string = 'file'
): Promise<string> => {
	const formData = new FormData();
	formData.append(fileName, imageFile, imageFile.name);

	const response = await fetchWithAuth(UPLOAD_IMAGE_URI, {
		method: 'POST',
		body: formData,
	});

	if (response.ok) {
		const reponseFileName = await response.json();
		return reponseFileName.fileName;
	}

	throw new Error();
};
