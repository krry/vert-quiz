import { json } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const keys = [...data.keys()].filter((k) => k.includes('question'));
		const questionCount = keys.length;
		const answers = keys.map((k) => +data.get(k) / data.get('max'));
		const score = answers.reduce((prev, curr) => +prev + +curr) / questionCount;

		return { score, total: answers.length, taken: true, count: questionCount, keys };
	}
};
