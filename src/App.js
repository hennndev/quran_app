import React, { useState } from 'react'
import Header from './components/UI/Header'
import QuranList from './components/Quran/QuranList'
import QuranAyahs from './components/Quran/QuranAyahs'

const App = () => {

	const [isSurah, setIsSurah] = useState(null)

	const handleBack = () => {
		setIsSurah(null)
	}
	return (
		<main className="min-h-screen bg-gray-200">
			<Header handleBack={handleBack}/>
			<div className="px-6">
				<div className="flex items-center justify-center lg:items-start lg:justify-start md:max-w-6xl mx-auto h-full mt-5 lg:space-x-10">
					<QuranList setIsSurah={setIsSurah} isSurah={isSurah}/>
					<QuranAyahs isSurah={isSurah}/>
				</div>
			</div>
		</main>
	)
}

export default App
