import React from 'react'
import { Link } from 'react-router-dom'

function HomeHeader() {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<header className='headerBtns'>
					<Link to='/logowanie' className='btn link'>
						Zaloguj
					</Link>
					<Link to='/rejestracja' className='btn link'>
						Załóż konto
					</Link>
				</header>
			</div>
		</div>
	)
}

export default HomeHeader
