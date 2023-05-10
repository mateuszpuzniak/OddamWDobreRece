import React from 'react'

function HomeNavigation() {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'flex-end',marginRight:"30px"  }}>
				<nav>
					<ul>
                    <li><a className='linkA' href='/'>Start</a></li>
					<li><a className='linkA' href='/'>O co Chodzi?</a></li>
					<li><a className='linkA' href='/'>O nas</a></li>
					<li><a className='linkA' href='/'>Fundacja i organizacje</a></li>
					<li><a className='linkA' href='/'>Kontakt</a></li>
                    </ul>
				</nav>
			</div>
		</div>
	)
}

export default HomeNavigation
