import axios from 'axios';

export const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const RECEIVE_MESSAGE_START = 'RECEIVE_MESSAGE_START';
export const RECEIVE_MESSAGE_SUCCESS = 'RECEIVE_MESSAGE_SUCCESS';
export const RECEIVE_MESSAGE_FAILURE = 'RECEIVE_MESSAGE_FAILURE';

export const sendMessage = transaction_id => async dispatch => {
	dispatch({ type: SEND_MESSAGE_START, payload: true });

	await axios
		.post(
			`${process.env.REACT_APP_REQ_URL}/api/message/tran/${transaction_id}`,
			{
				withCredentials: true
			}
		)
		.then(res => {
			dispatch({ type: SEND_MESSAGE_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: SEND_MESSAGE_FAILURE, payload: err });
		});
};

export const receiveMessage = transaction_id => async dispatch => {
	dispatch({ type: RECEIVE_MESSAGE_START, payload: true });

	await axios
		.post(
			`${process.env.REACT_APP_REQ_URL}/api/message/tran/${transaction_id}`,
			{
				withCredentials: true
			}
		)
		.then(res => {
			dispatch({ type: RECEIVE_MESSAGE_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: RECEIVE_MESSAGE_FAILURE, payload: err });
		});
};
