import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)

                const res = await fetch(url)
                const json = await res.json()
                
                setData(json)

                setLoading(false)
            } catch (error) {
                setError('Ocorreu algum erro ao carregar os dados')
            }
        }

        fetchData()

    }, [url])

    return {data, loading, error}
}

