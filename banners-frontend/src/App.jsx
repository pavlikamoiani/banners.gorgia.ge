"use client"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "./assets/components/Sidebar"
import Header from "./assets/components/Header"
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

// pages
import Branch from "./assets/pages/filter/Branch";
import TypeFilter from "./assets/pages/filter/TypeFilter";
import MaterialFilter from "./assets/pages/filter/MaterialFilter";
import SectionFilter from "./assets/pages/filter/SectionFilter";
import RentalGorgia from "./assets/pages/rental/RentalGorgia";
import Leased from "./assets/pages/rental/Leased";
import Spaces from "./assets/pages/rental/Spaces";
import Distribution from "./assets/pages/rental/Distribution";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} isCollapsed={isSidebarCollapsed} onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />

        <main className={`min-h-screen transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-[5.8rem]' : 'lg:ml-64'}`}>
          <Header onMenuClick={toggleSidebar} />
          <div className="p-6 lg:p-8">
            <div className="max-w-8xl mx-auto">
              <div className="">
                <Routes>
                  <Route path="/filter/branch" element={<Branch />} />
                  <Route path="/filter/type" element={<TypeFilter />} />
                  <Route path="/filter/material" element={<MaterialFilter />} />
                  <Route path="/filter/section" element={<SectionFilter />} />
                  <Route path="/rental/gorgia" element={<RentalGorgia />} />
                  <Route path="/rental/leased" element={<Leased />} />
                  <Route path="/rental/spaces" element={<Spaces />} />
                  <Route path="/rental/distribution" element={<Distribution />} />
                </Routes>
                {/* <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
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
                </div> */}
              </div>
            </div>
          </div>
        </main >
      </div >
    </BrowserRouter>
  )
}
