import React from 'react'
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function Register() {
	return (
		<div>
			<div>
				<div>
					<HomeHeader />
					<HomeNavigation />
				</div>
				<div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column",marginTop:"70px"}}>
					<div>
						<h2 className='fourStepsH2' style={{fontSize:"30px", fontWeight:"normal",textAlign:"center"}}>Zarejestruj się</h2>
                        <Decoration style={{margin:"40px 0px"}}/>
					</div>
					<div style={{background:"#F0F1F1 0% 0% no-repeat padding-box", width:"350px", height:"300px", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label className='loginLabel' for="username">Email:</label>
                            <input className='loginInput' type="text" id="username" name="username" style={{width:"200px"}}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label className='loginLabel' for="pass">Hasło</label>
                            <input className='loginInput' type="password" id="pass" name="password" style={{width:"200px"}}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label className='loginLabel' for="pass">Powtórz hasło</label>
                            <input className='loginInput' type="password" id="pass" name="password" style={{width:"200px"}}/>
                        </div>
                    </div>
					<div style={{display:"flex", justifyContent:"space-around",alignItems:"center",width:"700px"}}>
                        <button className='loginBtn' style={{padding:"10px 20px", marginTop:"30px"}}>Załóż konto</button>
                        <Link to='/logowanie' className='loginBtn'>Zaloguj się</Link>
                    </div>
				</div>
			</div>
		</div>
	)
}

export default Register
