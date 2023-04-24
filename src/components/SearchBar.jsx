import React, { useState } from 'react'
import "./style.css"
import Lupa from '../lupa.jpg'


function SearchBar({placeHolder,data}) {

  const [filterData, setFilterData] = useState([])

  const handleFilter = (e) =>{
    const word = e.target.value

    const filters = data.filter((v)=>{
      return v.title.toLowerCase().includes(word.toLowerCase())
    })
    if( word === ""){
      setFilterData([])
    }else{
      setFilterData(filters)
    }
    
  }

  return (
    <div className="search">
        <div className="searchInput">
            <input type="text" placeHolder={placeHolder} onChange={handleFilter} />
            <div className="searchIcon">
            </div>
        </div>
        {
          filterData.length !== 0 && (
            <div className="dataResults">
              {
                filterData.slice(0,15).map((item,key) =>{
                  return <a className='dataItems' href={item.link} target='_blank' key={key} ><p>{item.title}</p></a>
                })
              }
            </div>
          )
        }
       

    </div>
  )
}

export default SearchBar

