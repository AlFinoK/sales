import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const InfoContext = createContext({
    data: [],
    loading: false,
})

// eslint-disable-next-line react/prop-types
export const ContextWrapper = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)

    const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(URL)
                setData([data])
                setLoading(false)
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const toggleModal = () => {
        setModal((prev) => {
            const newState = !prev
            if (newState) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
            return newState
        })
    }

    function sumFn(num) {
        return num * 2
    }

    return (
        <InfoContext.Provider
            value={{ loading, data, toggleModal, modal, sumFn }}>
            {children}
        </InfoContext.Provider>
    )
}

export default InfoContext

export function useInfo() {
    return useContext(InfoContext)
}
