import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import './Chat.css';

const socket = io(process.env.REACT_APP_REQ_URL);

const Chat = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		// returned message from server
		socket.on('retMsg', message => {
			setMessages([...messages, message]);
		});

		// returned active users from server
		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});

		return () => {
			socket.emit('disconnect');

			socket.off();
		};
	}, [messages, socket]);

	const sendMessage = event => {
		event.preventDefault();

		if (message) {
			// sends message to server
			socket.emit('message', message);
			setMessage('');
		}
	};

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;
