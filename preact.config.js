export default function (config, env, helpers) {
	const options = helpers.getPluginsByName(config, 'LoaderOptionsPlugin')
		.find(({ plugin }) => plugin.options.options.postcss)
		.plugin.options.options;

	delete options.postcss; // will use postcss.config.js
}
