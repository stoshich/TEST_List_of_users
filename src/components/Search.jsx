import React from 'react'
import img from '../assets/search-icon.svg'

const Search = ({ inputValue, onChangeHandler }) => {
    return (
        <div className="search">
            <input type="text" value={inputValue} onChange={onChangeHandler} />
            <img src={img} alt="" />
        </div>
    )
}

export default Search