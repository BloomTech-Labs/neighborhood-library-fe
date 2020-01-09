import {
	SEND_MESSAGE_START,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_FAILURE,
	RECEIVE_MESSAGE_START,
	RECEIVE_MESSAGE_SUCCESS,
	RECEIVE_MESSAGE_FAILURE
} from '../actions/chatActions';

let initialState = {
	messages: [],
	sendMessageStart: false,
	sendMessageSuccess: false,
	receiveMessageStart: false,
	receiveMessageSuccess: false,
	error: ''
};

export default function chatReducer(state = initialState, action) {
	switch (action.type) {
		case SEND_MESSAGE_START:
			return {
				...state,
				sendMessageStart: true
			};
		case SEND_MESSAGE_FAILURE:
			return {
				...state,
				sendMessageStart: false,
				error: action.payload
			};
		case SEND_MESSAGE_SUCCESS:
			return {
				...state,
				sendMessageSuccess: true
			};
		case RECEIVE_MESSAGE_START:
			return {
				...state,
				receiveMessageStart: true
			};
		case RECEIVE_MESSAGE_FAILURE:
			return {
				...state,
				receiveMessageStart: false,
				error: action.payload
			};
		case RECEIVE_MESSAGE_SUCCESS:
			return {
				...state,
				receiveMessageSuccess: true
			};

		default:
			return state;
	}
}
