import { useEffect, useState } from 'react'
import { auth } from './FireBase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function validateEmail(email) {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailRegex.test(email)
}

function Login() {
	const [userInfo, setUserInfo] = useState('użytkownik niezalogowany')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isValidEmail, setValidEmail] = useState(null)
	const [isValidPass, setValidPass] = useState(null)

	const handleChangeEmail = event => {
		setEmail(event.target.value)
		setValidEmail(null)
	}

	const handleChangePass = event => {
		const text = event.target.value
		setPassword(text)
		setValidPass(text.length >= 6)
	}

	const handleSubmit = event => {
		event.preventDefault()
		const isEmailValid = validateEmail(email)

		setValidEmail(isEmailValid)

		if (isEmailValid && isValidPass) {
			console.log('Logged In')
			login()
		}
	}

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				console.log('Użytkownik zalogowany.')
				setUserInfo(res.user.email)
				// navigate("/o-nas");
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<div>
				<div>
					<HomeHeader />
					<HomeNavigation />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						marginTop: '70px',
					}}>
					<div>
						<h2
							className='fourStepsH2'
							style={{
								fontSize: '30px',
								fontWeight: 'normal',
								textAlign: 'center',
							}}>
							Zaloguj się
						</h2>
						<Decoration style={{ margin: '40px 0px' }} />
					</div>
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}>
						<div
							style={{
								background: '#F0F1F1',
								width: '350px',
								height: '240px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label className='loginLabel' htmlFor='username'>
									Email:
								</label>
								<input
									className='loginInput'
									type='email'
									id='username'
									name='username'
									onChange={handleChangeEmail}
									style={{ width: '200px' }}
								/>
								{isValidEmail === false && (
									<div style={{ color: 'red', marginBottom: '20px' }}>Podany adres email jest nieprawidłowy.</div>
								)}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label className='loginLabel' htmlFor='pass'>
									Hasło
								</label>
								<input
									onChange={handleChangePass}
									className='loginInput'
									type='password'
									id='pass'
									name='password'
									style={{ width: '200px' }}
									value={password}
								/>
								{isValidPass === false && (
									<div style={{ color: 'red', lineBreak: 'auto' }}>
										Hasło musi zawierać <br /> co najmniej 6 znaków.
									</div>
								)}
								{isValidPass && <div style={{ color: 'green', marginBottom: '20px' }}>Hasło spełniające wymogi.</div>}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								width: '700px',
							}}>
							<button
								onClick={login}
								className='loginBtn'
								type='submit'
								style={{ padding: '10px 20px', marginTop: '30px' }}>
								Zaloguj się
							</button>
							<Link to='/rejestracja' className='loginBtn' style={{textDecoration:"none", padding:"10px 20px", marginTop:"30px"}}>
								Załóż konto
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
