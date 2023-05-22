import React from 'react'
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import { Link } from 'react-router-dom'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function Logout() {
	

	return (
		<div>
			<div>
            <div>
					<HomeHeader />
					<HomeNavigation />
				</div>
                <div>
                <div style={{ marginTop:"100px",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
						<h2
							className='fourStepsH2'
							style={{
								fontSize: '30px',
								fontWeight: 'normal',
								textAlign: 'center',
							}}>
							Wylogowanie nastąpiło <br/> pomyślnie!
						</h2>
						<Decoration style={{ margin: '40px 0px' }} />
                        <Link to='/' className='homeTextBtn'>
                        Strona Główna
							</Link>
					</div>
				</div>
            </div>
		</div>
	)
}

export default Logout
