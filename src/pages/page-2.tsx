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

const SecondPage: React.SFC<IndexPageProps> = props => {
	const { title } = props.data.site.siteMetadata

	return (
		<Layout title={title}>
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	)
}

export default SecondPage

export const query = graphql`
	query SecondPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
