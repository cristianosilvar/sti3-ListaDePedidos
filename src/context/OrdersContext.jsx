import { useContext, createContext } from "react";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

const OrdersContext = createContext()

export function OrdersProvider ({children}) {
    
    const [reload, setReload] = useState(false)
    const {data: orders, loading, error} = useFetch(reload, setReload)

    return <OrdersContext.Provider value={{orders, loading, error, reload, setReload}}>{children}</OrdersContext.Provider>
}

export function useOrdersValue() {
    return useContext(OrdersContext)
}