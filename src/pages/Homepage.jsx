import React, { useEffect } from 'react'


const Homepage = (props) => {

    useEffect(() => {
       props.history.push('/surah/1')

       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="grid place-items-center w-full"></div>
    )
}

export default Homepage
