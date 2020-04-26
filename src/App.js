import React from 'react';

import styles from './App.module.css';

// import Chart from './components/Chart/Chart';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//instead of importing as above use below syntax and export them in index file

import { Cards, Chart, CountryPicker } from './components';
import { fetchData, fetchDailyData } from './api';
import covidImage from './images/covid_19.jpg';

class App extends React.Component {

	state = {
		data: {},
		country: ''
	}

	async componentDidMount(){
		document.title = "Covid-19 Tracker";
		const fetchedData = await fetchData();
		fetchDailyData()
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({
			data,
			country
		})
	}

    render(){
			const { data, country } = this.state;
        return(
            <div className={styles.container}>
				<img className={styles.image} src={covidImage} alt="Covid 19" />
							<Cards data={data}/>
							<CountryPicker handleCountryChange={this.handleCountryChange} />
							<Chart data={data}  country={country}/>
            </div>
        )
    }
}

export default App;