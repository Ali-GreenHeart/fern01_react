import axios from "axios";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { countryReducer, COUNTRY_ACTIONS } from "../../reducers/country";

const url = 'https://restcountries.com/v3.1/name/'

const Country = () => {
    const [country, dispatch] = useReducer(countryReducer, {})
    const { countryName } = useParams()

    useEffect(() => {
        axios.get(url + countryName)
            .then(({ data }) => {
                const { name, region, area, capital, coatOfArms, flags, subregion, independent } = data[0]
                const payload = {
                    name: name.common,
                    region,
                    area,
                    capital: capital ? capital[0] : "----",
                    coatOfArms:  coatOfArms.png,
                    flag: flags.png,
                    subregion,
                    independent
                }
                dispatch({
                    type: COUNTRY_ACTIONS.get_country,
                    payload
                })
            })
    }, [])

    return (
        <>
            {
                Object.entries(country).length === 0

                    ?
                    <Loading />
                    :
                    <>
                        <p>{country.name} <img style={{ width: 150, height: 100, objectFit: 'contain' }} src={country.flag} alt={`flag of ${country.name}`} /> <img style={{ width: 100, height: 100, objectFit: 'contain' }} src={country.coatOfArms} alt={`coatOfArms of ${country.name}`} /> </p>
                        <p>capital: {country.capital}</p>
                        <p>region: {country.region}</p>
                        <p>subregion: {country.subregion}</p>
                        <p>area: {country.area}</p>
                        <p>independent :
                            <span style={{
                                display: 'inline-block',
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                backgroundColor: country.independent ? 'green' : 'red'
                            }}></span>
                        </p>
                    </>
            }
        </>
    )
}
export default Country;