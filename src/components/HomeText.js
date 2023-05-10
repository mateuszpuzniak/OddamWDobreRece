import React from 'react'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function HomeText() {
	return (
		<div>
			<div className='homeText'>
				<p className="homeTextP" style={{fontSize:"38px", textAlign:"center", width:"550px"}}>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</p>
				<Decoration style={{margin:"40px 0px"}}/>
				<div style={{display:"flex", justifyContent:"center"}}>
					<button className='homeTextBtn'>ODDAJ RZECZY</button>
					<button className='homeTextBtn'>ZORGANIZUJ ZBIÓKĘ</button>
				</div>
			</div>
		</div>
	)
}

export default HomeText
