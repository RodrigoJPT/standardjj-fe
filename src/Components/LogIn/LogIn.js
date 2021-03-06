import React, { useState, useContext } from 'react';
import '../SignUp/SignUp.css';
import FormField from '../FormField/FormField';
import { AuthContext } from '../../Auth';
import { auth } from '../../fb';
import { Redirect, withRouter, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const LogIn = () => {
	const { user } = useContext(AuthContext);
	//TODO: FIGURE OUT REDIRECT IF USER EXISTS WITHOUT IT INFINITE RENDERING EVERYTHING. WEIRD BUG!!!

	const blankForm = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(blankForm);
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);

	if (user) {
		return <Redirect to='/' />;
	}

	if (sent) {
		return <Spinner />;
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
		if (doubleCheckForm(formState)) {
			setSent(true);
			auth
				.signInWithEmailAndPassword(formState.email, formState.password)
				.then(() => {
					return <Redirect to='/' />;
				})
				.catch((err) => {
					if (err.code === 'auth/user-not-found') {
						setErrors({
							...errors,
							email: 'User not found',
						});
					}
					if (err.code === 'auth/wrong-password') {
						setErrors({
							...errors,
							password: 'Wrong password',
						});
					}
					setSent(false);
				});
		}
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
					<Link to='/signup'>Sign up</Link>
					<br />
					<Link to='/passwordreset'>Forgot Password?</Link>
				</p>
			</form>
		</div>
	);
};

export default withRouter(LogIn);
