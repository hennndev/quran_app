import React from 'react'
import { useFetch } from '../../hooks/useFetch'


const QuranList = ({setIsSurah, isSurah}) => {
    const { data: surahList } = useFetch('surahs')

    return (
        <div className={`h-full lg:h-700 lg:overflow-y-scroll lg:scrollbar-hide ${isSurah ? 'hidden lg:inline' : 'inline lg:inline'}`}>
            {surahList?.map(surah => (
                <div className="bg-green-500 mb-5 py-3 px-5 text-white rounded-md" key={surah.number}>
                    <h1 className="text-xl">{surah.name}</h1>
                    <p>{surah.translation} | {surah.revalation}</p>
                    <p onClick={() => setIsSurah(surah.number)} className="cursor-pointer underline">Surah Detail</p>
                </div>
            ))}
        </div>
    )
}

export default QuranList
