import React from 'react'

const Header = ({handleBack}) => {
    

    return (
        <div className="py-3 px-5 bg-green-600 text-white shadow-lg sticky top-0 z-30">
            <div className="md:max-w-6xl mx-auto flex items-center justify-between">
                <h1 onClick={handleBack} className="text-2xl cursor-pointer">Quran APP</h1>
                <h2 onClick={handleBack} className="cursor-pointer">Homepage</h2>
            </div>
        </div>
    )
}

export default Header
