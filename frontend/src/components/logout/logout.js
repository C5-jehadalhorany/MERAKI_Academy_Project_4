import React from "react"
import { useContext } from "react"
import { tokenContext } from '../../App'





const Logout = () => {
    const { isLoggedIn, setIsLoggedIn, token, setToken } = useContext(tokenContext)
    return <div>
        {isLoggedIn = false}
        {localStorage.clear}
    </div>


}


export default Logout