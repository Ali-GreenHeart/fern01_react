export const COUNTRIES_ACTIONS = {
    get_countries: 'get_countries'
}
export const countriesReducer = (state, action) => {
    switch (action.type) {
        case COUNTRIES_ACTIONS.get_countries:
            return [...action.payload]
    }
}