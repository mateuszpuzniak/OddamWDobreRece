import React, { useState } from 'react'
import Fundation from './Fundation'
import Organization from './Organization'
import Lokal from './Lokal'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function WhoWeHelping() {
	const [selected, setSelected] = useState('fundation')

	const handleClick = option => {
		setSelected(option)
	}

	return (
		<section className='container whoWeHelping' id='whowehelping'>
			<div style={{ display: 'flex', flexDirection: 'column', margin: '50px 0px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<h2 className='fourStepsH2' style={{ fontSize: '30px', fontWeight: 'normal' }}>
						Komu pomagamy?
					</h2>
					<Decoration style={{ margin: '40px 0px' }} />
				</div>
				<div className='helpBtnDiv'>
					<button className='helpBtn' onClick={() => handleClick('fundation')}>
						Fundacjom
					</button>
					<button className='helpBtn' onClick={() => handleClick('organization')}>
						Organizacjom pozarządowym
					</button>
					<button className='helpBtn' onClick={() => handleClick('lokal')}>
						Lokalnym zbiórkom
					</button>
				</div>
				<div className='helpTextDiv container'>
					<span>
						<p className='helpText'>
							W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym
							się zajmują, komu pomagają i czego potrzebują.
						</p>
					</span>
				</div>
				<div>
					{selected === 'fundation' && <Fundation />}
					{selected === 'organization' && <Organization />}
					{selected === 'lokal' && <Lokal />}
				</div>

			</div>
		</section>
	)
}
export default WhoWeHelping
