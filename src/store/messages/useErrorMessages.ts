import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ErrorMessagesState = {
	messages: string[];
	appendMessage: (message: string) => void;
};

export const useErrorMessages = create<ErrorMessagesState>()(
	persist(
		(set) => ({
			messages: [],
			appendMessage: (msg) =>
				set((prevState) => ({
					...prevState,
					messages: [...prevState.messages, msg],
				})),
		}),
		{
			name: 'Errors',
		}
	)
);
