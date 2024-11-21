function SkeletonNav() {
    return (
        <div className="flex flex-row items-center space-x-40">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                    <span className="w-16 h-4 bg-gray-300 rounded animate-pulse mt-1"></span>
                </div>
            ))}
        </div>
    )
}

export default SkeletonNav
