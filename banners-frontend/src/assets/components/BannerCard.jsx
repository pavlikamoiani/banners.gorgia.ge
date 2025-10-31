export default function BannerCard({ title, description, size, variant = "default", className = "" }) {
    if (variant === "featured") {
        return (
            <div
                className={`bg-gradient-to-br from-[#0173b1] to-[#0193d1] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${className}`}
            >
                <h2 className="text-2xl font-bold mb-2 leading-tight">{title}</h2>
                <p className="mb-4 opacity-90">{description}</p>
                <div className="flex items-center gap-2 text-sm opacity-75">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                    </svg>
                    <span>{size}</span>
                </div>
                <button className="mt-6 bg-white text-[#0173b1] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
                    Узнать больше
                </button>
            </div>
        )
    }

    if (variant === "cta") {
        return (
            <div className={`bg-[#0173b1] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all ${className}`}>
                <h2 className="text-xl font-bold mb-3 leading-tight">{title}</h2>
                <p className="mb-6 opacity-90 leading-relaxed">{description}</p>
                <div className="flex gap-3">
                    <button className="bg-white text-[#0173b1] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
                        Начать
                    </button>
                    <button className="border-2 border-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        Подробнее
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div
            className={`bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-[#0173b1] transition-all group ${className}`}
        >
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
                <span className="text-gray-400 font-mono text-sm">{size}</span>
            </div>
            <h3 className="text-lg font-bold text-[#0173b1] mb-2 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            <button className="mt-4 text-[#0173b1] font-medium text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Подробнее
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
