import React from 'react'
import SidebarMenu from '../services/SidebarMenu'
import {menuListProfile, menuListPages, menuListLabel} from '../utils/menuListSidebar'
import {PackageCheck} from 'lucide-react'

function Sidebar() {
  return (
    <>
      <div className='w-64 h-screen flex flex-col justify-start items-start p-4 bg-gray-100/50'>
        <div className="flex items-center gap-2 w-full py-4">
          <PackageCheck size={40} className='text-[#078172]' />
          <h1 className='text-[#078172] text-2xl font-bold'>My Z Tasks</h1>
        </div>
        <SidebarMenu list={menuListProfile}/>
        <div className="w-full py-4">
          <h5 className='text-[#078172] text-sm font-bold'>Pages</h5>
          <SidebarMenu list={menuListPages} />
        </div>
        <div className="w-full py-4">
          <h5 className='text-[#078172] text-sm font-bold'>Labels</h5>
          <SidebarMenu list={menuListLabel} />
        </div>
      </div>
    </>
  )
}

export default Sidebar