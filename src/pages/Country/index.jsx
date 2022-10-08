import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const url = 'https://restcountries.com/v3.1/name/'

const Country = () => {
    const [country, setCountry] = useState({})
    const { countryName } = useParams()

    useEffect(() => {
        axios.get(url + countryName)
            .then(({ data }) => {
                const { name, region, area, capital, coatOfArms, flags, subregion, independent } = data[0]
                setCountry({
                    name: name.common,
                    region,
                    area,
                    capital: capital[0],
                    coatOfArms: coatOfArms.png,
                    flag: flags.png,
                    subregion,
                    independent
                })
            })
    }, [])

    return (
        <>
            <p>{country.name} <img style={{ width: 100, height: 100, objectFit: 'cover' }} src={country.flag} alt="" /> <img style={{ width: 100, height: 100, objectFit: 'cover' }} src={country.coatOfArms} alt="" /> </p>
            <p>capital: {country.capital}</p>
            <p>region: {country.region}</p>
            <p>subregion: {country.subregion}</p>
            <p>area: {country.area}</p>
            <p>independent :
                <span style={{
                    display: 'inline-block',
                    width: 30,
                    height: 30,
                    backgroundColor: country.independent ? 'green' : 'red'
                }}></span>

            </p>
        </>
    )
}
export default Country;