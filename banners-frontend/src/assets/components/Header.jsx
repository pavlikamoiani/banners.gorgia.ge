"use client"

export default function Header({ onMenuClick }) {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
            <div className="flex items-center justify-between p-6 pl-20 lg:pl-6">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg bg-[#0173b1] text-white hover:bg-[#015a8f] transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div>
                    <h1 className="text-3xl font-bold text-[#0173b1] leading-tight">ბანერები</h1>
                    <p className="text-gray-600 mt-1 text-sm">ბანერების კონტროლი</p>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="px-6 py-2 bg-[#0173b1] text-white rounded-lg hover:bg-[#015a8f] transition-colors font-medium shadow-sm">
                        Log In
                    </button>
                    {/* <button className="px-6 py-2 bg-[#0173b1] text-white rounded-lg hover:bg-[#015a8f] transition-colors font-medium shadow-sm">
                        Get Started
                    </button> */}
                </div>
            </div>
        </header>
    )
}
