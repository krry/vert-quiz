import { cleanup, render, fireEvent, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Test from './+page.svelte';

describe('Introversion Test', () => {
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
		fireEvent.submit(screen.getByRole('form'));
	});

	it('5 scores extroverted', async () => {
		render(Test, {
			answer1: 1,
			answer2: 1,
			answer3: 1,
			answer4: 1,
			answer5: 1
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('extroverted'));
	});

	it('4 scores extroverted', async () => {
		render(Test, {
			answer1: 1,
			answer2: 1,
			answer3: 1,
			answer4: 1,
			answer5: 1
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('extroverted'));
	});

	it('3 scores extroverted', () => {
		render(Test, {
			answer1: 1,
			answer2: 0,
			answer3: 1,
			answer4: 0,
			answer5: 1
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('extroverted'));
	});

	it('2 scores introverted', () => {
		render(Test, {
			answer1: 0,
			answer2: 0,
			answer3: 0,
			answer4: 1,
			answer5: 1
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('introverted'));
	});

	it('1 scores introverted', () => {
		render(Test, {
			answer1: 0,
			answer2: 0,
			answer3: 0,
			answer4: 1,
			answer5: 0
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('introverted'));
	});

	it('0 scores introverted', () => {
		render(Test, {
			answer1: 0,
			answer2: 0,
			answer3: 0,
			answer4: 0,
			answer5: 0
		});
		fireEvent.submit(screen.getByRole('form'));
		expect(screen.findByText('introverted'));
	});
});
