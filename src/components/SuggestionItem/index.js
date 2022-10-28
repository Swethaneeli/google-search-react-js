// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionArrow} = props
  const {suggestion} = suggestionDetails

  const onArrowClick = () => {
    suggestionArrow(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={onArrowClick}>
        <img
          src="
https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
