import { cleanup, render, fireEvent, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Test from './+page.svelte';

describe('version Test', () => {
	afterEach(() => cleanup());

	it('page mounts', () => {
		const { container } = render(Test);

		expect(container).toBeTruthy();
		expect(container.innerHTML).toContain('parties');
		expect(container).toMatchSnapshot();
	});

	it('test submits', async () => {
		render(Test, {
			form: { taken: false }
		});
		await fireEvent.submit(screen.getByRole('form'));
	});

	it('67% scores extroversion', async () => {
		render(Test, {
			// answers: ['1', '1', '1', '1', '1']
			form: { score: 0.67, taken: true }
		});
		// TODO: determine why testing-library doesn't see the DOM update after form submission
		// await fireEvent.submit(screen.getByRole('form'));
		expect(await screen.findByText('67% extroverted'));
		expect(await screen.findByText('extroversion'));
	});

	it('33% scores introversion', async () => {
		render(Test, {
			// answers: ['1','1','0','1','1'],
			form: { score: 0.333, taken: true }
		});
		// await fireEvent.submit(screen.getByRole('form'));
		expect(await screen.findByText('33% extroverted'));
		expect(await screen.findByText('introversion'));
	});

	it('half scores extroversion', async () => {
		render(Test, {
			// answers: ['1','0','1','0','1'],
			form: { score: 0.5, taken: true }
		});
		// await fireEvent.submit(screen.getByRole('form'));
		expect(await screen.findByText('extroversion'));
	});

	it('below half scores introversion', async () => {
		render(Test, {
			// answers: ['1','0','0','0','1'],
			form: { score: 0.49, taken: true }
		});
		// await fireEvent.submit(screen.getByRole('form'));
		expect(await screen.findByText('introversion'));
	});

	it('0 scores introversion', async () => {
		render(Test, {
			// answers: ['0','0','0','0','0'],
			form: { score: 0, taken: true }
		});
		// await fireEvent.submit(screen.getByRole('form'));
		expect(await screen.findByText('introversion'));
	});
});
