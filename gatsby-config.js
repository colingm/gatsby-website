module.exports = {
	siteMetadata: {
		title: 'Colin Maxfield',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
				omitGoogleFont: true,
			},
		},
	],
}
