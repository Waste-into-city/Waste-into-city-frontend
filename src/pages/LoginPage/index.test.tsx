import { act, fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/renderWithProviders';

import { config } from './config';
import { LoginPage } from '.';

const { LOG_IN_BUTTON_LABEL, PLACEHOLDERS } = config;

describe('Login Page', () => {
	beforeEach(() => {
		renderWithProviders(<LoginPage />);
	});

	it('render', () => {
		const { getByText, getByPlaceholderText } = screen;

		expect(getByText(LOG_IN_BUTTON_LABEL)).toBeInTheDocument();

		for (const field in PLACEHOLDERS) {
			expect(
				getByPlaceholderText(
					PLACEHOLDERS[field as keyof typeof PLACEHOLDERS]
				)
			).toBeInTheDocument();
		}
	});

	it('correct inputs', async () => {
		const { getByPlaceholderText, getByText, queryByText } = screen;

		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.email),
			'example@gmail.com'
		);
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.password),
			'1'.repeat(8)
		);

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		expect(queryByText('Minimal')).not.toBeInTheDocument();
		expect(queryByText('Maximum')).not.toBeInTheDocument();
	});

	it('incorrect inputs - minimal length', async () => {
		const { getByPlaceholderText, getAllByText, getByText } = screen;

		await userEvent.type(getByPlaceholderText(PLACEHOLDERS.email), 'ex');
		await userEvent.type(getByPlaceholderText(PLACEHOLDERS.password), '1');

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		expect(getAllByText(/^Minimal/)).toHaveLength(2);
	});

	it('incorrect inputs - maximum length', async () => {
		const { getByPlaceholderText, getByText, getAllByText } = screen;

		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.email),
			'e'.repeat(100)
		);
		await act(async () =>
			fireEvent.change(getByPlaceholderText(PLACEHOLDERS.password), {
				target: {
					value: '1'.repeat(400),
				},
			})
		);

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		expect(getAllByText(/^Max/)).toHaveLength(2);
	});
});
