export const COUNTRY_ACTIONS = {
    get_country: 'get_country'
}
export const countryReducer = (state, action) => {
    switch (action.type) {
        case COUNTRY_ACTIONS.get_country:
            return {...action.payload}
    }
}