import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'

import { rhythm } from '../utils/typography'

export interface LayoutProps {
	children: JSX.Element[]
	title: string
}

const Layout: React.SFC<LayoutProps> = ({ children, title }) => (
	<div>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Header siteTitle={title} />
		<div
			style={{
				margin: `0 auto`,
				marginBottom: rhythm(1.5),
				marginTop: rhythm(1.5),
				maxWidth: 650,
				paddingLeft: rhythm(3 / 4),
				paddingRight: rhythm(3 / 4),
			}}
		>
			{children}
		</div>
	</div>
)

export default Layout
