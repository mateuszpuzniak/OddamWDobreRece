import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeHeader from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'

function validateEmail(email) {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailRegex.test(email)
}

function Register() {
	const [email, setEmail] = useState('')
	const [isValidEmail, setValidEmail] = useState(null)
	const [isValidPassOne, setValidPassOne] = useState(null)
	const [isValidPassTwo, setValidPassTwo] = useState(null)
    const [passwordOne, setPasswordOne] = useState('');

	const handleChangeEmail = event => {
		setEmail(event.target.value)
		setValidEmail(null)
	}

	const handleChangePassOne = event => {
		const text = event.target.value
        setPasswordOne(text);
		setValidPassOne(text.length >= 6)
	}

	const handleChangePassTwo = event => {
		const text = event.target.value
        const isPasswordMatch = text === passwordOne;
        setValidPassTwo(text.length >= 6 && isPasswordMatch);
	}

	const handleSubmit = event => {
		event.preventDefault()
		const isEmailValid = validateEmail(email)

		setValidEmail(isEmailValid)

		if (isEmailValid && isValidPassOne && isValidPassTwo) {
			console.log('Logged In')
		}
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
							Zarejestruj się
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
								height: '370px',
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
									onChange={handleChangeEmail}
									className='loginInput'
									type='email'
									id='emailInput'
									placeholder='abc@xyz.pl'
									style={{ marginBottom: '10px', fontSize: '18px', width: '220px' }}
								/>
								{isValidEmail === false && (
									<div style={{ color: 'red', marginBottom: '20px' }}>Podany adres email jest nieprawidłowy.</div>
								)}
								{isValidEmail && <div style={{ color: 'green', marginBottom: '20px' }}>Adres email jest poprawny.</div>}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label className='loginLabel' htmlFor='pass'>
									Hasło
								</label>
								<input
                                    value={passwordOne}
									onChange={handleChangePassOne}
									className='loginInput'
									type='password'
									name='password'
									style={{ width: '220px' }}
								/>
								{isValidPassOne === false && (
									<div style={{ color: 'red', lineBreak: 'auto' }}>Hasło musi zawierać <br /> co najmniej 6 znaków.</div>
								)}
								{isValidPassOne && (
									<div style={{ color: 'green', marginBottom: '20px' }}>Hasło spełniające wymogi.</div>
								)}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label className='loginLabel' htmlFor='pass'>
									Powtórz hasło
								</label>
								<input
									onChange={handleChangePassTwo}
									className='loginInput'
									type='password'
									name='password'
									style={{ width: '220px' }}
								/>
								{isValidPassTwo === false && (
									<div style={{ color: 'red', lineBreak: 'auto' }}>Hasła nie są identyczne lub puste.</div>
								)}
								{isValidPassTwo && (
									<div style={{ color: 'green', marginBottom: '20px' }}>Hasło spełniające wymogi.</div>
								)}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								width: '700px',
							}}>
							<button className='loginBtn' type='submit' style={{ padding: '10px 20px', marginTop: '30px' }}>
								Załóż konto
							</button>
							<Link to='/logowanie' className='loginBtn'>
								Zarejestrowano
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
