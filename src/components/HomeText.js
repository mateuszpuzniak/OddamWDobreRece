import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'
import '../scss/style.scss'

function HomeText() {
	return (
		<div>
			<div className='homeText'>
				<p className='homeTextP' style={{ fontSize: '38px', textAlign: 'center', width: '550px' }}>
					Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
				</p>
				<Decoration style={{ margin: '40px 0px' }} />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Link to='/logowanie' className='homeTextBtn linkBtn'>
						ODDAJ RZECZY
					</Link>
					<Link to='/rejestracja' className='homeTextBtn linkBtn'>
						ZORGANIZUJ ZBIÓRKĘ
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomeText
