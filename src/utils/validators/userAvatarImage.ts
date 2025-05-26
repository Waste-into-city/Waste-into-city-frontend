const MAX_FILE_SIZE = 10_485_760;

export const validateUserAvatarImage = (image: File) =>
	image.size <= MAX_FILE_SIZE;
