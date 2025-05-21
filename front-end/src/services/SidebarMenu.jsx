import React from 'react'

const SidebarMenu = ({list}) => {
  return (
    <>
        <ul className='w-full flex flex-col gap-2 py-4 font-medium text-sm'>
            {
                list.map((item, i)=>{
                    const Icon = item.icon
                    return (
                        <li key={i} className='w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer text-gray-600 hover:text-[#078172]'>
                            {Icon && <Icon size={18} className='w-5 h-5'/>}
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default SidebarMenu
