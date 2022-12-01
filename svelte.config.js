import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			routes: 'src/routes/'
		},
		adapter: adapter(),
		files: {
			lib: './src/lib'
		}
	}
};

export default config;
