import React, { useState, useContext, useEffect } from 'react';
import '../SignUp/SignUp.css';
import FormField from '../FormField/FormField';
import { AuthProvider } from '../../Auth';
import { auth } from '../../fb';
import { Redirect } from 'react-router-dom';

const LogIn = () => {
	const user = useContext(AuthProvider);
	const blankForm = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(blankForm);
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);

	if (user !== null) {
		return <Redirect to='/' />;
	}

	function doubleCheckForm() {
		const errs = {};
		errs.email = formState.email ? '' : 'Required';
		errs.password = formState.password ? '' : 'Required';
		setErrors({ ...errs });
		if (!errs.email && !errs.password) {
			return true;
		} else {
			return false;
		}
	}

	function handleCancel(e) {
		console.log('cancel');
	}

	function handleChange(e) {
		if (e.target.value) {
			setErrors({
				...errors,
				[e.target.id]: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(formState.email, formState.password)
			.catch(console.error);
		//TODO: MORE SOPHISTICATED ERROR HANDLING
	}

	return (
		<div className='container sign-up-box'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Log In</h1>
				<label htmlFor='email'>Email:</label>
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={errors.email}
					handleChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={errors.password}
					handleChange={handleChange}
				/>
				<button type='submit' disabled={sent}>
					Log In
				</button>
				<button className='err' type='click' onClick={handleCancel}>
					Cancel
				</button>
				<p style={{ display: 'block', margin: '3px', textAlign: 'center' }}>
					Don't have an account?&nbsp;
					<a href='/login'>Sign up</a>
					<br />
					<a href='/login'>Forgot Password?</a>
				</p>
			</form>
		</div>
	);
};

export default LogIn;
