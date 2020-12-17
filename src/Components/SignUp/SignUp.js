import React, { useState } from 'react';
import './SignUp.css';
import FormField from '../FormField/FormField';
import { firestore, auth } from '../../fb';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//DUMMY COMPONENT FOR STYLING, DO NOT USE, FORM FIELDS WILL BE CONVERTED TO CUSTOM COMPONENTS
const SignUp = () => {
	const blankForm = {
		username: '',
		email: '',
		password: '',
		confirm: '',
	};
	const [formState, setFormState] = useState(blankForm);
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);
	const history = useHistory();

	function doubleCheckForm() {
		const errs = {};
		errs.username = formState.username ? '' : 'Required';
		errs.email = formState.email ? '' : 'Required';
		errs.password = formState.password ? '' : 'Required';
		errs.confirm = formState.confirm ? '' : 'Required';
		setErrors({ ...errs });
		if (!errs.username && !errs.email && !errs.confirm && !errs.password) {
			return true;
		} else {
			return false;
		}
	}

	function handleCancel(e) {
		console.log('cancel');
	}

	function validateUsername(e) {
		if (!e.target.value) {
			setErrors({
				...errors,
				username: 'Required',
			});
		} else {
			setErrors({
				username: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	function validateEmail(e) {
		const regex = RegExp('[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,15}$');
		if (!e.target.value) {
			setErrors({
				...errors,
				email: 'Required',
			});
		} else if (regex.test(e.target.value) && e.target.value) {
			setErrors({
				...errors,
				email: '',
			});
		} else {
			setErrors({
				...errors,
				email: 'Invalid email',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	function validatePassword(e) {
		if (!e.target.value) {
			setErrors({
				...errors,
				[e.target.id]: 'Required',
			});
		} else if (e.target.id === 'password') {
			if (e.target.value !== formState.confirm) {
				setErrors({
					...errors,
					confirm: 'Passwords must match',
					password: '',
				});
			} else {
				setErrors({
					...errors,
					confirm: '',
				});
			}
		} else if (e.target.value !== formState.password) {
			setErrors({
				...errors,
				confirm: 'Passwords must match',
			});
		} else {
			setErrors({
				...errors,
				confirm: '',
			});
		}
		setFormState({
			...formState,
			[e.target.id]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
		if (doubleCheckForm()) {
			let userId, token;
			firestore
				.collection('/users')
				.where('username', '==', formState.username)
				.get()
				.then((snapshot) => {
					if (snapshot.length) {
						setErrors({ username: `Username already taken` });
					} else {
						return auth.createUserWithEmailAndPassword(
							formState.email,
							formState.password
						);
					}
				})
				.then((data) => {
					userId = data.user.uid;
					return data.user.getIdToken();
				})
				.then((newToken) => {
					token = newToken;
					const userInfo = {
						username: formState.username,
						email: formState.email,
						createdAt: new Date().toISOString(),
						userId: userId,
					};
					return firestore.doc(`users/${userId}`).set(userInfo);
				})
				.then(() => {
					axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
					history.push('/');
				})
				.catch((err) => {
					console.error(err);
					if (err.code === 'auth/email-already-in-use') {
						setErrors({ email: 'Email already in use' });
					}
				});
		} else {
			setSent(false);
		}
	}

	return (
		<div className='container sign-up-box'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				<label htmlFor='username'>Username:</label>
				<FormField
					type='text'
					id='username'
					value={formState.username}
					err={errors.username}
					handleChange={validateUsername}
				/>
				<label htmlFor='email'>Email:</label>
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={errors.email}
					handleChange={validateEmail}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={errors.password}
					handleChange={validatePassword}
				/>
				<label htmlFor='confirm'>Confirm Password:</label>
				<FormField
					type='password'
					id='confirm'
					value={formState.confirm}
					err={errors.confirm}
					handleChange={validatePassword}
				/>
				<button type='submit' disabled={sent}>
					Sign Up
				</button>
				<button className='err' type='click' onClick={handleCancel}>
					Cancel
				</button>
				<p style={{ display: 'block', margin: '3px' }}>
					Have an account?&nbsp;
					<a href='/login'>Log in</a>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
