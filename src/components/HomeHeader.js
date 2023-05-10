import React from 'react'

function HomeHeader() {
	return (
		<div>
			<div style={{display:"flex", justifyContent:"flex-end"} }>
				<header className='headerBtns'>
					<button className='btn'>Zaloguj</button>
					<button className='btn'>Załóż konto</button>
				</header>
			</div>
		</div>
	)
}

export default HomeHeader
