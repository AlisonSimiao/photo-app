import { createContext, ReactNode, useState } from "react";
import { valuesLayout } from "../../components/Layout";



export const contextLayout = createContext({} as valuesLayout) ;

export function ContextLayoutProvider ({children}: { children: ReactNode }){
    const [App, setApp] = useState(1)
    function auth() {
        setApp(0)
    }
    function freedom() {
        setApp(1)
    }

    const values = {
        App,
        auth,
        freedom
    }

    return <contextLayout.Provider value={values}>
        {children}
    </contextLayout.Provider>
}