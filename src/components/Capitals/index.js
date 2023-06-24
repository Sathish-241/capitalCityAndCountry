import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  getCapitalCity = event => {
    this.setState({
      activeCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeCapitalId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="question-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-select-container">
            <select
              className="capital-select"
              value={activeCapitalId}
              onChange={this.getCapitalCity}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="capital-option"
                  value={eachItem.id}
                  key={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-text">is capital of which country?</p>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
