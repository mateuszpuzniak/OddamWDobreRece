import React from 'react'
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import HomeImg from './HomeImg'
import HomeText from './HomeText'

function Home() {
	return (
		<section>
			<div
				className='container home'
				style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%', height: 'auto' }}>
				<div className='heroimg' style={{height:"auto"}}>
					<HomeImg />
				</div>
				<div className='rightSide'>
					<HomeHeader />
					<HomeNavigation />
					<HomeText />
				</div>
			</div>
		</section>
	)
}

export default Home
