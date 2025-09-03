'use client'

import { useState } from 'react'
import SidebarMenu from '../SidebarMenu'

const LayoutWithSidebar = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false)

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen w-full overflow-x-auto bg-[#0E0E0E]">
      <SidebarMenu onOpen={handleViewSidebar} />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default LayoutWithSidebar
