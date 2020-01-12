import { faBookOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import './landing.scss';

export const LandingPage = () => {
	return (
		<div className='landing-background'>
			<div className='landing-content'>
				<div className='cta'>
					<h1 className='cta-title'>
						A New Way to
						<br /> Share Books
					</h1>
					<Link className='sign-up' to='/register'>
						<CustomButton isSignUp>Sign Up</CustomButton>
					</Link>
				</div>
			</div>
			<footer className='landing-footer'>
				<div className='footer-group'>
					<div className='icon-group book'>
						<FontAwesomeIcon className='icon book' icon={faBookOpen} />
					</div>
					<div className='landing-text'>
						<p>
							Share your own collection <br />
							or borrow from others
						</p>
					</div>
				</div>
				<div className='footer-group'>
					<div className='icon-group friends'>
						<FontAwesomeIcon className='icon friends' icon={faUserFriends} />
					</div>
					<div className='landing-text'>
						<p className='text-right'>
							Join a vibrant community of book <br />
							enthuisists in your local area
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};
