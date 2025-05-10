import { create } from 'zustand';

import { WorkLookup } from '@/types/contracts/workLookup';

type SelectedWorksGroupState = {
	worksGroup: Array<WorkLookup> | null;
	setWorksGroup: (group: Array<WorkLookup>) => void;
	clearWorksGroup: () => void;
};

export const useSelectedWorksGroup = create<SelectedWorksGroupState>()(
	(set) => ({
		worksGroup: null,
		setWorksGroup: (group) =>
			set((prevState) => ({ ...prevState, worksGroup: group })),
		clearWorksGroup: () =>
			set((prevState) => ({ ...prevState, worksGroup: null })),
	})
);
