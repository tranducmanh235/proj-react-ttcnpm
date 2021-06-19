// import React, { useContext, useEffect, useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import Header from './Header'


// const Home = () => {
    
//     return (
//         <div className='col-md-10 col-lg-8 mx-auto d-block'>
//             <Header />
            
//         </div>
//     )
// }

// export default Home;

import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { FoodContext } from '../contexts/FoodContext'
import SingleFood from './SingleFood'
import FoodModal from './FoodModal'
import DeleteModal from './DeleteModal'
import ModifyModal from './ModifyModal'

const Home = () => {
    const {foodState: {food, foodList}, getFood} = useContext(FoodContext)
    useEffect(() => getFood(), [])

    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className='row justify-content-center'>
                { foodList.map((one) => (
                    <SingleFood food={one} />
                ))}
            </div>
            {food !== null && <FoodModal />}
            {food !== null && <ModifyModal />}
            {food !== null && <DeleteModal />}
        </div>
    )
}

export default Home;