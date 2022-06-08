import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import realtimedev from './realtime_plugin.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: "out"
		}),
		vite: {
			plugins: [
				realtimedev
			]
		}
	}
};

export default config;
