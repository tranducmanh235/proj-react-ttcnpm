// import React, { createContext, useState } from 'react'
// import { apiUrl } from '../utils/constants'
// import axios from 'axios'

// export const FoodContext = createContext()

// const FoodContextProvider = ({children}) => {
//     const [foodState, setFoodState] = useState({
//         food: [],
//     })

//     const getFood = async () => {
//         try {
//             const response = await axios.get(`${apiUrl}/foodHandler/foods`)
//             if (response.data.success) {
//                 setFoodState({
//                     food: response.data.food
//                 })
//             }
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
    
//     const change = (newFood) => {
//         setFoodState(newFood);
//     }

//     const FoodContextData = {getFood, foodState, change}

//     return (
//         <FoodContext.Provider value = {FoodContextData}>
//             {children}
//         </FoodContext.Provider>
//     )
// }

// export default FoodContextProvider

import React, { createContext, useEffect, useState } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

export const FoodContext = createContext()

const FoodContextProvider = ({children}) => {
    const [foodState, setFoodState] = useState({
        food: null,
        foodList: [],
    })
    const [cartState, setCartState] = useState({
        cart: []
    })

    const [showFoodModal, setShowFoodModal] = useState(false)
    const [modifyFoodModal, setModifyFoodModal] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCartState(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState))
    }, [cartState])

    const getFood = async () => {
        try {
            const response = await axios.get(`${apiUrl}/foodHandler/foods`)
            if (response.data.success) {
                setFoodState({
                    ...foodState,
                    foodList: response.data.food
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const change = (newFood) => {
        const newFoodState={...foodState};
        for(let i=0;i<newFoodState.foodList.length;i++){
            if(newFoodState.foodList[i]._id==newFood._id){
                newFoodState.foodList[i]=newFood
                setFoodState(newFoodState);
                return
            }
        }
        
    }
    const findFood = foodId => {
        const food = foodState.foodList.find(food => food._id === foodId)
        setFoodState({
            ...foodState,
            food: food
        })
    }

    const addToCart = (foodId) => {    
        const food = foodState.foodList.find(food => food._id === foodId)   
        const check = cartState.cart.find(item => item.name === food.name)
        if (!check) {   
            const one = {
                name: food.name,
                quantity: 1,
                price: food.price,
                amount: food.price
            }
            // food.count = 1
            setCartState({
                ...cartState,
                cart: [...cartState.cart, one]
            })
        }    
    }

    const decreaseQuantity = (foodName) => {

    }

    const increaseQuantity = (foodName) => {
        cartState.cart.forEach(item => {
            if (item.name === foodName) {
                item.quantity += 1
                item.amount = item.price*item.quantity
            }
            setCartState({
                ...cartState,
                cart: cartState.cart
            })
        })
    }

    const removeFood = (foodName) => {
        
    }

    // xuat ham ra
    const FoodContextData = {getFood,change, findFood, setShowFoodModal, setModifyFoodModal, addToCart, decreaseQuantity, increaseQuantity, removeFood, foodState, cartState, showFoodModal, modifyFoodModal}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider