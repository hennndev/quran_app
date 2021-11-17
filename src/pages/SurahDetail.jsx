import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Header from '../components/UI/Header'
import {toArabic} from 'arabic-digits'
import { useData } from '../context/context'

const SurahDetail = () => {
    const { surahId } = useParams()
    const { data } = useFetch(`surahs/${surahId}`)

    const { handleClose } = useData()
    
    return (
        <div className="flex-1" onClick={handleClose}>
            <Header data={data}/>
            <div className="pt-10 px-10">
                <h1 className="text-center font-bold text-2xl text-gray-800">{data?.bismillah?.arab}</h1>
                <div className="mt-10">
                    {data?.ayahs.map(ayah => (
                        <div className="mb-7 text-gray-800" key={ayah.number.inSurah}>
                            <p className="mb-4 font-medium text-xl text-right">
                                {ayah.arab}
                                <span className="mr-2 border-4 border-gray-400 text-gray-500 rounded-full px-2 text-sm font-bold text-center">
                                    {toArabic(ayah.number.inSurah)}
                                </span>
                            </p>
                            <p className="text-left">{ayah.number.inSurah}. {ayah.translation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SurahDetail
