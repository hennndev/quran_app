import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import ReactAudioPlayer from 'react-audio-player';

const QuranAyahs = ({isSurah}) => {

    const { data: quranAyahs } = useFetch(`surahs/${isSurah}`)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [isSurah])

    if(!quranAyahs) {
        return (
            <div className="bg-white px-8 pt-32 pb-80 flex-1 text-center rounded-md hidden lg:inline">
                <h1 className="text-2xl font-medium text-green-700">Press Surah Detail for Detail Surah</h1>
            </div>
        )
    }


    return (
        <div className={`flex-1 h-full mb-32 lg:mb-0 lg:h-700 overflow-y-auto scrollbar-hide ${isSurah ? 'inline' : 'hidden'} lg:inline`}>
            <div className="bg-green-500 lg:bg-white rounded-md p-5 fixed bottom-0 left-4 right-4 lg:sticky lg:top-0 mb-5 lg:mb-10">
                {isSurah && (
                    <ReactAudioPlayer
                        src={quranAyahs?.audio}
                        controls
                        className="w-full"
                    />
                )}
            </div>   
            <div className="bg-white text-center py-5 px-10 text-gray-800 rounded-md text-3xl">
                <h1 className="font-bold mb-4">{quranAyahs?.name}</h1>
                <h1 className="font-bold">{quranAyahs?.bismillah?.arab}</h1>
                <p className="text-sm mt-5">{quranAyahs?.bismillah?.translation}</p>
            </div>
            <div className="mt-5">
                {quranAyahs?.ayahs?.map(ayah => (
                    <div className="bg-white text-right py-4 px-6 text-gray-800 rounded-md text-xl mb-5" key={ayah.number.inSurah}>
                        <h2 className="font-medium">{ayah?.arab}</h2>
                        <p className="text-sm mt-5">{ayah?.translation}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuranAyahs
