import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }

        fetchApi();
    }, [setCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country,index)=> <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;