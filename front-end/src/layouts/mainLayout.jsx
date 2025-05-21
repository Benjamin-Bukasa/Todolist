import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './../components/Sidebar';
import Navbar from './../components/Navbar';

function mainLayout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
          <Sidebar />
        <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="flex-1 p-4 overflow-y-auto no-scrollbar">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

export default mainLayout