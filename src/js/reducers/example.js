const example = (state = {num: 0}, action) => {
	switch (action.type) {
		case 'DO_SOMETHING':
			return {
				...state,
				something: action.payload
			}
		default:
			return state
	}
}

export default example
