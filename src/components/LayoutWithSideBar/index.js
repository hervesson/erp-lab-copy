'use client'

import { useState } from 'react'
import SidebarMenu from '../SidebarMenu'

const LayoutWithSidebar = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false)

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-[100dvh] w-full bg-[#0E0E0E]">
      <SidebarMenu onOpen={handleViewSidebar} />
      <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}

export default LayoutWithSidebar
