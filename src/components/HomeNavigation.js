import React from 'react'

function HomeNavigation() {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'flex-end',marginRight:"30px"  }}>
				<nav>
					<ul>
                    <li><a className='linkA' href='/'>Start</a></li>
					<li><a className='linkA' href='#ocochodzi'>O co Chodzi?</a></li>
					<li><a className='linkA' href='#aboutUs'>O nas</a></li>
					<li><a className='linkA' href='#whowehelping'>Fundacja i organizacje</a></li>
					<li><a className='linkA' href='#contact'>Kontakt</a></li>
                    </ul>
				</nav>
			</div>
		</div>
	)
}

export default HomeNavigation
