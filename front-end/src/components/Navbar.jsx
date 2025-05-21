import React from 'react'
import {AlignJustify,Plus,Search} from 'lucide-react'
import InputField from './ui/InputField';
import Button from './ui/Button';
import SearchForm from './../services/SearchForm';

function Navbar() {

const title = 'Tableau de bord'
// Function to handle click event

const handleClick = () => {
  console.log('Navbar clicked')
  // Add your logic here, e.g., toggle sidebar;
  
}

  return (
    <>
      <nav className='w-full flex justify-between items-center p-8 text-gray-700'>
        <div className="flex items-center gap-4 text-xl font-bold ">
          <AlignJustify size={30} className='text-[#078172] cursor-pointer' onClick={handleClick}/>
          {title}
        </div>
        <div className="flex items-center justify-between gap-4">
          <SearchForm/>
          <Button className='bg-[#078172] text-white hover:bg-[#078172]/80' type='button' onClick={handleClick}>
            <Plus size={20} className='text-white' />
            Nouvelle tâche
          </Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar