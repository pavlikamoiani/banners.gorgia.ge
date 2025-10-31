"use client"

import { useState } from "react"
import Sidebar from "./assets/components/Sidebar"
import Header from "./assets/components/Header"
import { BsFillEasel2Fill } from "react-icons/bs";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} isCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />

      <main className={`min-h-screen transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-[5.8rem]' : 'lg:ml-64'}`}>
        <Header onMenuClick={toggleSidebar} />
        {/* Banners Grid */}
        <div className="p-6 lg:p-8">
          <div className="max-w-8xl mx-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">ყველა ბანერები</p>
                    <p className="text-3xl font-bold text-[#0173b1] mt-1">24</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BsFillEasel2Fill className="text-2xl text-[#0173b1]" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">აქტიური</p>
                    <p className="text-3xl font-bold text-[#0173b1] mt-1">18</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">ვადისამოწურვა</p>
                    <p className="text-3xl font-bold text-[#0173b1] mt-1">1.2K</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}
