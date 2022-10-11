const initialObject = {
    counter: 0,
    countries: []
}

export const REDUX_ACTIONS = {
    counter: {
        increase: "increase",
        decrease: "decrease",
        reset: "reset",
        special: "special",
    },
    countries: {
        get_countries: "get_countries"
    }
}

export const rootReducer = (state = initialObject, action) => {
    let current = state.counter
    switch (action.type) {
        case REDUX_ACTIONS.counter.increase:
            return { ...state, counter: ++current }
        case REDUX_ACTIONS.counter.decrease:
            return { ...state, counter: --current }
        case REDUX_ACTIONS.counter.reset:
            return { ...state, counter: 0 }
        case REDUX_ACTIONS.counter.special:
            return { ...state, counter: current + action.payload }
        case REDUX_ACTIONS.countries.get_countries:
            return { ...state, countries: action.payload }
        default:
            return state;
    }
}
