import React, { createContext, useState } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

export const FoodContext = createContext()

const FoodContextProvider = ({children}) => {
    const [foodState, setFoodState] = useState({
        food: [],
    })

    const getFood = async () => {
        try {
            const response = await axios.get(`${apiUrl}/foodHandler/foods`)
            if (response.data.success) {
                setFoodState({
                    food: response.data.food
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    

    const FoodContextData = {getFood, foodState}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider