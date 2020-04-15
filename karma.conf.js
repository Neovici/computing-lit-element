/* eslint-disable no-console */
/* eslint-env node */
const { createDefaultConfig } = require('@open-wc/testing-karma'),
	merge = require('webpack-merge'),
	baseCustomLaunchers = {
		FirefoxHeadless: {
			base: 'Firefox',
			flags: ['-headless']
		}
	},
	sauceCustomLaunchers = {
		slChrome: {
			base: 'SauceLabs',
			browserName: 'chrome',
			browserVersion: 'beta',
			platformName: 'Windows 10'
		}
	},
	allCustomLaunchers = {
		...baseCustomLaunchers,
		...sauceCustomLaunchers
	};

module.exports = config => {

	const useSauce = process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY,
		customLaunchers = useSauce ? allCustomLaunchers : baseCustomLaunchers;

	if (!useSauce) {
		console.warn('Missing SAUCE_USERNAME/SAUCE_ACCESS_KEY, skipping sauce.');
	}

	config.set(
		merge(createDefaultConfig(config), {
			browsers: Object.keys(customLaunchers),
			customLaunchers,
			files: [
				// runs all files ending with .test in the test folder,
				// can be overwritten by passing a --grep flag. examples:
				//
				// npm run test -- --grep test/foo/bar.test.js
				// npm run test -- --grep test/bar/*
				{
					pattern: config.grep ? config.grep : 'test/**/*.test.js',
					type: 'module'
				}
			],
			coverageIstanbulReporter: {
				thresholds: {
					emitWarning: true // set to `true` to not fail the test command when thresholds are not met
				}
			},

			esm: {
				nodeResolve: true
			},
			sauceLabs: {
				testName: 'Web App Unit Tests'
			},
			reporters: ['dots', 'saucelabs'],
			singleRun: true
			// you can overwrite/extend the config further
		})
	);
	return config;
};
