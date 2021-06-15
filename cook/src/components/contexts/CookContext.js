import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { apiUrl, TOKEN } from '../utils/constants'
import setToken from '../utils/setToken'


export const CookContext = createContext()

const CookContextProvider = ({children}) => {
    const [cookState, setCookState] = useState({
        isAuthen: false,
        cook: null
    })

    const loadCook = async () => {
        if (localStorage[TOKEN]) {
            setToken(localStorage[TOKEN])
        }
        try {
            const response = await axios.get(`${apiUrl}/authen/cook`)
            if (response.data.success) {
                setCookState({
                    isAuthen: true,
                    Cook: response.data.Cook
                })
            }
        }
        catch (error) {
            localStorage.removeItem(TOKEN)
            setToken(null)
            setCookState({
                isAuthen: false,
                Cook: null
            })
        }
    }

    useEffect(() => loadCook(), [])

    const sendSigninForm = async (signinForm) => {
        try {
            const response = await axios.post(`${apiUrl}/authen/cook/signin`, signinForm)
            if (response.data.success) {
                localStorage.setItem(TOKEN, response.data.encodedToken)
            }
            await loadCook()
            return response.data
        }
        catch (error) {
            if (error.response.data) return error.response.data
            return {success: false, message: error.message}
        }
    }

    const cookSignout = () => {
        localStorage.removeItem(TOKEN)
        setToken(null)
        setCookState({
            isAuthen: false,
            Cook: null
        })
    }

    const CookContextData = {sendSigninForm, cookSignout, cookState}

    return (
        <CookContext.Provider value={CookContextData}>
            {children}
        </CookContext.Provider>
    )
}

export default CookContextProvider