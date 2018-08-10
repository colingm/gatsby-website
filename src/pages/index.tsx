import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../layouts'

interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string
			}
		}
	}
}

const IndexPage: React.SFC<IndexPageProps> = props => {
	const { title } = props.data.site.siteMetadata

	return (
		<Layout title={title}>
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
