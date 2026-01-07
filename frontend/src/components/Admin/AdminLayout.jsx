import React from 'react'
import { FaBars } from 'react-icons/fa'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      {/* Mobile toggle button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
          <h1 className='ml-4 text-xl font-medium'>Admin Dashboard</h1>
      </div>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-10 bg-black/50 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  )
}

export default AdminLayout