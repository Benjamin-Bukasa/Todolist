import React from 'react';
import {Search} from 'lucide-react'
import InputField from '../components/ui/InputField';

const SearchForm = () => {

   const handleClick = () => {
    console.log('SearchForm clicked')
    }

  return (
    <>
      <form className="flex items-center gap-4 border px-4 py-2 rounded-lg">
            <button onClick={handleClick} className='flex items-center gap-2'>
              <Search className = "cursor-pointer"/>
            </button>
            <InputField/>
          </form>
    </>
  );
}

export default SearchForm;
