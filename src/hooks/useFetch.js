import { useState, useEffect } from 'react'

export const useFetch = (query) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`https://quran-api-id.vercel.app/${query}`)
            const data = await res.json()

            setData(data)
        }
        fetchData()
    }, [query])

    return {
        data: data?.data
    }
}

