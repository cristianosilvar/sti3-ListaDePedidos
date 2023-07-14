import { useContext, createContext } from "react";

const OrdersContext = createContext()

export function OrdersProvider ({children, value }) {
    return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
}

export function useOrdersValue() {
    return useContext(OrdersContext)
}