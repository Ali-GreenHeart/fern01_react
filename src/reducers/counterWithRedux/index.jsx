const initialObject = {
    counter: 0
}


export const counterReducer = (state = initialObject, action) => {
    let current = state.counter
    switch (action.type) {
        case 'increase':
            return { ...state, counter: ++current }
        case 'decrease':
            return { ...state, counter: --current }
        case 'reset':
            return { ...state, counter: 0 }
        case 'special':
            return { ...state, counter: current + action.payload }
        default:
            return state;
    }
}
