import { createContext, useState } from "react"


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    //State variables to handle logins

    const [aToken, setAtoken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        //so that can access toke for any components
        aToken, setAtoken,
        backendUrl
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider