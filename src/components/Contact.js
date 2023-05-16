import React, { useState } from 'react'
import { ReactComponent as Decoration } from '../assets/Decoration.svg'
import contactJPG from '../assets/Background-Contact-Form.jpg'

const validateEmail = email => {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return emailRegex.test(email)
}

const Contact = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [isValidEmail, setValidEmail] = useState(null)
	const [isValidName, setValidName] = useState(null)
	const [isValidText, setValidText] = useState(null)

	const handleChangeEmail = event => {
		setEmail(event.target.value)
		setValidEmail(null)
	}

	const handleChangeName = event => {
		setName(event.target.value)
		setValidName(null)
	}

	const handleChangeText = event => {
		const text = event.target.value
		setValidText(text.length >= 120)
	}

	const handleSubmit = event => {
		event.preventDefault()
		const isEmailValid = validateEmail(email)
		const isNameValid = /^[^\s]+$/.test(name)

		setValidEmail(isEmailValid)
		setValidName(isNameValid)

		if (isEmailValid && isNameValid && isValidText) {
			console.log('Form submitted successfully')
		}
	}
	return (
		<section id='contact' style={{ maxWidth: '100%', height: 'auto', paddingTop: '30px' }}>
			<div style={{ position: 'relative', width: '100%', height: '100%' }}>
				<img src={contactJPG} style={{ opacity: 0.4, width: '100%', height: '100vh' }} alt='Opis obrazka' />
				<div
					style={{
						position: 'absolute',
						top: '-100px',
						right: '300px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						height: '100%',
						width: '500px',
					}}>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<h2 className='fourStepsH2' style={{ fontSize: '38px', fontWeight: 'normal' }}>
							Skontaktuj się z nami
						</h2>
						<Decoration style={{ margin: '40px 0px' }} />
						<form onSubmit={handleSubmit}>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<div>
									<label className='loginLabel' htmlFor='username'>
										Wpisz swoje imię
									</label>
									<input
										onChange={handleChangeName}
										className='loginInput'
										pattern='^\S+$'
										type='name'
										placeholder='Krzysztof'
										style={{ marginBottom: '10px', fontSize: '18px', width: '220px' }}
									/>
									{isValidName === false && (
										<div style={{ color: 'red', marginBottom: '20px' }}>Wpisz tylko jeden wyraz.</div>
									)}
									{isValidName === true && (
										<div style={{ color: 'green', marginBottom: '20px' }}>Pole wypełnione poprawnie.</div>
									)}
								</div>
								<div>
									<label className='loginLabel' htmlFor='email'>
										Wpisz swoje email
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
									{isValidEmail && (
										<div style={{ color: 'green', marginBottom: '20px' }}>Adres email jest poprawny.</div>
									)}
								</div>
							</div>
							<div
								style={{
									width: '100%',
									height: '200px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
								}}>
								<label className='loginLabel' htmlFor='text'>
									Wpisz swoją wiadomość (max. 300 znaków)
								</label>
								<textarea
									onChange={handleChangeText}
									minlength='120'
									maxlength='300'
									rows={4}
									cols={40}
									className='loginInput'
									name='postContent'
									style={{ fontSize: '18px', maxWidth: '480px', minWidth: '480px', minHeight: '120px' }}></textarea>
								{isValidText === false && ( <div style={{ color: 'red', marginBottom: '20px' }}>Tekst musi zawierać co najmniej 120 znaków.</div>)}
								{isValidText && (<div style={{ color: 'green', marginBottom: '20px' }}>Tekst zawiera co najmniej 120 znaków.</div>)}
							</div>
							<button className='homeTextBtn' type='submit'>
								Wyślij!
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
