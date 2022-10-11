import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { REDUX_ACTIONS } from "../../reducers/reduxReducer";
import { compareCountriesByName } from "../../utils";

const url = 'https://restcountries.com/v3.1/all'

const CountryLink = ({ name, flag }) => {
    return (
        <Link
            to={`/countries/${name}`}
            style={{
                border: '1px solid black',
                display: 'block'
            }}
        >{name} <img style={{
            width: 150,
            height: 100,
            objectFit: 'cover'
        }} src={flag} alt={name + ' flag'} /> </Link>
    )
}

const CountriesWithRedux = ({ countries, dispatch }) => {
    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                data = data.map((country) => ({ name: country.name.common, flag: country.flags.png }))
                data.sort(compareCountriesByName)
                dispatch({ type: REDUX_ACTIONS.countries.get_countries, payload: data })
            })
    }, [])

    return (
        countries.length === 0
            ?
            <>
                <Loading />
            </>
            :
            <>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: "center",
                    gap: 20,
                    justifyContent: 'flex-start'
                }
                }>
                    {
                        countries.map(({ name, flag }) => <CountryLink key={name} name={name} flag={flag} />)
                    }
                </div >
            </>
    )
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(CountriesWithRedux);