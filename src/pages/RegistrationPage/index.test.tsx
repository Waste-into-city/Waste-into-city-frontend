import { fireEvent, screen } from '@testing-library/dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/renderWithProviders';

import { config } from './config';
import { RegistrationPage } from '.';

const { PLACEHOLDERS, REGISTER_BUTTON_LABEL } = config;

describe('RegistrationPage', () => {
	beforeEach(() => {
		renderWithProviders(<RegistrationPage />);
	});

	it('render', () => {
		const { getByPlaceholderText, getByText } = screen;
		expect(getByText(REGISTER_BUTTON_LABEL)).toBeInTheDocument();
		for (const key in PLACEHOLDERS) {
			expect(
				getByPlaceholderText(
					PLACEHOLDERS[key as keyof typeof PLACEHOLDERS]
				)
			).toBeInTheDocument();
		}
	});

	it('correct input', async () => {
		const { getByPlaceholderText, getByText, queryByText } = screen;

		await userEvent.type(getByPlaceholderText(PLACEHOLDERS.name), 'John');
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.email),
			'example@mail.com'
		);
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.password),
			'111111111'
		);
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.confirmPassword),
			'111111111'
		);

		await userEvent.click(getByText(REGISTER_BUTTON_LABEL));

		expect(queryByText(/^Minimal/)).not.toBeInTheDocument();
		expect(queryByText(/^Maxmimum/)).not.toBeInTheDocument();
	});

	it('incorrect input - minimal length', async () => {
		const { getAllByText, getByText } = screen;

		await userEvent.click(getByText(REGISTER_BUTTON_LABEL));

		expect(getAllByText(/^Minimal/)).toHaveLength(4);
	});

	it('incorrect input - maximum length', async () => {
		const { getAllByText, getByText, getByPlaceholderText } = screen;

		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.name),
			'J'.repeat(46)
		);
		await userEvent.type(
			getByPlaceholderText(PLACEHOLDERS.email),
			'e'.repeat(46)
		);
		await act(async () => {
			fireEvent.change(getByPlaceholderText(PLACEHOLDERS.password), {
				target: { value: 'a'.repeat(300) },
			});
			fireEvent.change(
				getByPlaceholderText(PLACEHOLDERS.confirmPassword),
				{ target: { value: 'a'.repeat(300) } }
			);
		});

		await userEvent.click(getByText(REGISTER_BUTTON_LABEL));

		expect(getAllByText(/^Max/)).toHaveLength(4);
	});
});
