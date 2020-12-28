import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../fb';
import Spinner from '../Spinner/Spinner';
import { AuthContext } from '../../Auth';

const PasswordReset = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [pending, setPending] = useState(false);
	const [sent, setSent] = useState(false);
	const { user } = useContext(AuthContext);

	const handleChange = (e) => {
		setEmail(e.target.value);
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPending(true);
		auth
			.sendPasswordResetEmail(email)
			.then(() => {
				setSent(true);
				setPending(false);
				if (user) {
					auth.signOut();
				}
			})
			.catch(() => {
				setSent(false);
				setPending(false);
				setError('Account email not found');
			});
	};

	if (pending) {
		return <Spinner />;
	}

	if (sent) {
		return (
			<div className='password-reset'>
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '20px auto',
					}}>
					Email sent. Reset your password using the link and then&nbsp;
					<Link to='/login'>log in</Link>.
				</p>
			</div>
		);
	}

	return (
		<div className='password-reset'>
			<form
				action='submit'
				onSubmit={handleSubmit}
				style={{ display: 'grid', maxWidth: '300px', margin: '10px auto' }}>
				<h1 className='page-header' style={{ margin: '0', padding: '0' }}>
					Reset Password
				</h1>
				<label htmlFor='email' style={{ paddingTop: '20px' }}>
					Enter your email:
				</label>
				<input
					className={error ? 'err' : ''}
					placeholder='example@email.com'
					type='email'
					id='email'
					value={email}
					onChange={handleChange}
					style={{ height: '25px', fontSize: '18px', padding: '2px' }}
				/>
				{!error || <p className='err-text'>*{error}</p>}
				<button type='submit'>Send Reset Email</button>
			</form>
		</div>
	);
};

export default PasswordReset;
