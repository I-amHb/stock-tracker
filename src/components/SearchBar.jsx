import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full bg-bgCard p-4'>
        <input name='search' className='bg-[#f0f0f1] p-1 rounded-md w-full outline-none' type="text"  placeholder='Search...'/>
    </div>
  )
}

export default SearchBar