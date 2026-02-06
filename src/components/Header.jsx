import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='w-full p-padding-sm bg-bgCard md:flex justify-between items-center'>
        <h1 className='text-mid font-bold text-center'>StockTracker</h1>
        <div>
            <SearchBar />
        </div>
    </header>
  )
}

export default Header