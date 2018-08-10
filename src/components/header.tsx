import React from 'react'
import Link from 'gatsby-link'

export interface HeaderProps {
	siteTitle: string
}

const Header: React.SFC<HeaderProps> = props => {
	const { siteTitle } = props

	return (
		<div
			style={{
				background: 'rebeccapurple',
				marginBottom: '1.45rem',
			}}
		>
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '1.45rem 1.0875rem',
				}}
			>
				<h1 style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
							color: 'white',
							textDecoration: 'none',
						}}
					>
						{siteTitle}
					</Link>
				</h1>
			</div>
		</div>
	)
}

export default Header
