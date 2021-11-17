import React from 'react'
import { FiBookOpen } from 'react-icons/fi'
import { withRouter } from 'react-router-dom'
import { useData } from '../../context/context'
import { useFetch } from '../../hooks/useFetch'

const Sidebar = (props) => {
    const { data } = useFetch('surahs')
    const { isSide, handleClose } = useData()

    const handleClick = (query) => {
        props.history.push(`/surah/${query}`)
        handleClose()
    }

    return (
        <div 
            className={`fixed ${isSide ? 'left-0' : '-left-full'} w-60 bg-green-500 lg:sticky top-0 lg:left-0 lg:w-80 h-screen py-5 px-5 overflow-y-auto`}>
            <h1 className="text-2xl text-white font-medium flex items-center justify-center">
                <FiBookOpen className="mr-3"/>
                Quran App
            </h1>

            <div className="mt-10 text-white pl-2 lg:pl-5 pr-5">
                {data?.map(surah => (
                    <div className="mb-5 text-lg font-medium cursor-pointer" key={surah.number} 
                    onClick={() => handleClick(surah.number)}>
                        <div className="flex items-center space-x-2">
                            <p className="">{surah.number}.</p>
                            <p className="" key={surah.number}>{surah.name}</p>
                        </div>
                        <p className="ml-7 text-sm">({surah.translation})</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Sidebar)
