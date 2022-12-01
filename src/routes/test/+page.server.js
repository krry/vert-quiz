/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const score =
			+data.get('question1') +
			+data.get('question2') +
			+data.get('question3') +
			+data.get('question4') +
			+data.get('question5');
		return { score: score, taken: true };
	}
};
