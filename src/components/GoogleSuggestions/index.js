// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  suggestionArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-bg-container">
        <img
          src="
https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="search-container">
          <div className="search-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>

          <ul className="suggestion">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                suggestionArrow={this.suggestionArrow}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
