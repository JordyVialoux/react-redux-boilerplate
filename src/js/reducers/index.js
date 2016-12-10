export default function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				todos: [
				...state.todos, {
					text: action.text,
					completed: false,
					id: getId(state)
				}]
			}
		}
	}

	return state
    
}
