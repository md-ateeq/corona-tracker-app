import React from 'react';

import styles from './App.module.css';

// import Chart from './components/Chart/Chart';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//instead of importing as above use below syntax and export them in index file

import { Cards, Chart, CountryPicker } from './components'
import { fetchData, fetchDailyData } from './api'

class App extends React.Component {

	state = {
		data: {},
		country: ''
	}

	async componentDidMount(){
		const fetchedData = await fetchData();
		fetchDailyData()
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		// console.log(country);
		// this.setState({
		// 	country: country
		// })
		fetchData(country);
	}

    render(){
			const { data } = this.state;
        return(
            <div className={styles.container}>
							<Cards data={data}/>
							<CountryPicker handleCountryChange={this.handleCountryChange} />
							<Chart />
            </div>
        )
    }
}

export default App;