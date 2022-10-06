import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { compareCountriesByName } from "../../utils";

const url = 'https://restcountries.com/v3.1/all'

const CountryLink = ({ name, flag }) => {
    return (
        <Link
            to={`/countries/${name}`}
            style={{
                border: '1px solid black',
                display:'block'
            }}
        >{name} <img style={{
            width: 50,
            height: 50,
            objectFit: 'cover'
        }} src={flag} alt={name + ' flag'} /> </Link>
    )
}

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                data = data.map((country) => ({ name: country.name.common, flag: country.flags.png }))
                data.sort(compareCountriesByName)
                setCountries(data)
            })
    }, [])
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: "center",
            gap: 20,
            justifyContent:'flex-start'
        }}>
            {
                countries.map((country) => {
                    return <CountryLink key={country.name} name={country.name} flag={country.flag} />
                })
            }
        </div>
    )
}
export default Countries;