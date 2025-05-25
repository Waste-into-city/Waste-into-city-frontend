const MAX_FILE_SIZE = 10_485_760;

export const validateWorkImageApplications = (applications: Array<File>) =>
	applications.reduce(
		(isFileSizeCorrect, file) =>
			isFileSizeCorrect && file.size <= MAX_FILE_SIZE,
		true
	);
