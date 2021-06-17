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
            console.log(response.data);
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
    
    console.log(children);

    const change = (newFood) => {
        setFoodState(newFood);
    }

    const FoodContextData = {getFood, foodState, change}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider