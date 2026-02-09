import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full bg-bgCard py-4'>
      <input name='search' className='bg-bgInput p-1 rounded-md w-full md:w-45 outline-none' type="text" placeholder='Search...' />
    </div>
  )
}

export default SearchBar