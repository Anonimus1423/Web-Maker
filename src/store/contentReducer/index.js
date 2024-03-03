const initialState = {
	content: [],
}
const defaultText = {
	text: '000000000',
	color: 'black',
	fontSize: '14px',
	type: 'text',
}

export function contentReducer(state = initialState, action) {
	switch (action.type) {
		case 'addText':
			return {
				...state,
				content: [
					...state.content,
					{
						...defaultText,
						posX: action.payload.posX,
						posY: action.payload.posY,
					},
				],
			}
		case 'changeText':
			return {
				...state,
				content: state.content.map((element, index) => {
					if (index + 1 === action.payload.id) {
						return { ...element, text: action.payload.text }
					}
					return element
				}),
			}

		default:
			return state
	}
}
