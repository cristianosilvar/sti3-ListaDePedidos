import { useContext, createContext, useEffect } from "react";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

const OrdersContext = createContext()

export function OrdersProvider ({children}) {
    
    const [reload, setReload] = useState(false)
    const {data, loading, error} = useFetch(reload, setReload)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        setOrders(data)
    }, [reload, data])

    return <OrdersContext.Provider value={{orders, setOrders, loading, error, reload, setReload}}>{children}</OrdersContext.Provider>
}

export function useOrdersValue() {
    return useContext(OrdersContext)
}