import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { useData } from '../../context/context'

const Header = ({data}) => {
    const { handleSide } = useData()
    return (
        <div className="shadow-md py-3 px-5 w-full flex items-center justify-between text-lg text-gray-800">
            <h1 className="font-medium">{data?.name}</h1>
            <GoThreeBars className="cursor-pointer block lg:hidden" onClick={(e) => handleSide(e)}/>
        </div>
    )
}

export default Header
