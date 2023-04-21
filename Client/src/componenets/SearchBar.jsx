import React, {useState} from 'react'

export const SearchBar = () => {
    const [text, setText] = useState("")
  return (
    <div className='searchBarWrapper'>
        <div className='searchBar'>
            {/* <form> */}
                <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
                <select name="filter">
                    <option value="filter">Filter</option>
                    <option value="val1">Value 1</option>
                    <option value="val2">Value 2</option>
                    <option value="val3">Value 3</option>
                    <option value="val4">Value 4</option>
                </select>

                <select name="sort">
                    <option value="sort">Sort</option>
                    <option value="val1">Value 1</option>
                    <option value="val2">Value 2</option>
                    <option value="val3">Value 3</option>
                    <option value="val4">Value 4</option>
                </select>
            {/* </form> */}
            <button className="addValue">+ Add</button>
        </div>
    </div>
  )
}
