import React from 'react'
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import HomeImg from './HomeImg'
import HomeText from './HomeText'

function Home() {
	return (
		<div className='container home' style={{display:"flex", justifyContent:"space-between"}}>
			<div className="heroimg">
				<HomeImg />
			</div>
			<div className='rightSide'>
				<HomeHeader />
				<HomeNavigation />
				<HomeText />
			</div>
		</div>
	)
}

export default Home
