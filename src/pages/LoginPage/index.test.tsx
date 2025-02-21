import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/renderWithProviders';

import { config } from './config';
import { LoginPage } from '.';

const { FIELD_ERRORS, LOG_IN_BUTTON_LABEL, PLACEHOLDERS } = config;

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
			'1'.repeat(FIELD_ERRORS.password.min.value)
		);

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		for (const field in FIELD_ERRORS) {
			const { min, max } =
				FIELD_ERRORS[field as keyof typeof FIELD_ERRORS];
			expect(queryByText(min.message)).not.toBeInTheDocument();
			expect(queryByText(max.message)).not.toBeInTheDocument();
		}
	});

	it('incorrect inputs - minimal length', async () => {
		const { getByPlaceholderText, getByText } = screen;

		await userEvent.type(getByPlaceholderText(PLACEHOLDERS.email), 'ex');
		await userEvent.type(getByPlaceholderText(PLACEHOLDERS.password), '1');

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		for (const field in FIELD_ERRORS) {
			const { min } = FIELD_ERRORS[field as keyof typeof FIELD_ERRORS];
			expect(getByText(min.message)).toBeInTheDocument();
		}
	});

	it('incorrect inputs - maximum length', async () => {
		const { getByPlaceholderText, getByText } = screen;

		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.email),
			'e'.repeat(FIELD_ERRORS.email.max.value + 1)
		);
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.password),
			'1'.repeat(FIELD_ERRORS.password.max.value + 1)
		);

		await userEvent.click(getByText(LOG_IN_BUTTON_LABEL));

		for (const field in FIELD_ERRORS) {
			const { max } = FIELD_ERRORS[field as keyof typeof FIELD_ERRORS];
			expect(getByText(max.message)).toBeInTheDocument();
		}
	});
});
