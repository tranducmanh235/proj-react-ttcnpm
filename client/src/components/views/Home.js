import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { FoodContext } from '../contexts/FoodContext'
import { Card, Button } from 'react-bootstrap'

const Home = () => {
    const {foodState: {food}, getFood} = useContext(FoodContext)
    useEffect(() => getFood(), [])


    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className='row justify-content-center'>
                { food.map((one) => (
                    <Card className='col-md-5 col-lg-3 m-3'>
                        <Card.Img src={one.imageURL} alt='img' />
                        <Card.Body>
                            <Card.Title className='text-center font-weight-bold text-primary' type='button' data-toggle='modal' data-target={'#Food' + one._id}>{one.name}</Card.Title>
                            <Card.Text className='text-center font-weight-bold'>{one.price} đ</Card.Text>
                        </Card.Body>
                        <Button variant='danger'>ADD TO CART</Button>
                        <div className='modal fade' id={'Food' + one._id} tabindex='-1' aria-labelledby={'Label' + one._id} aria-hidden='true'>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <p className='modal-title text-danger' id={'Label' + one._id}>{one.name}</p>
                                        <button className='close' data-dismiss='modal' aria-label='Close'>
                                            <span aria-hidden='true'>&times;</span>
                                        </button>
                                    </div>
                                    <div className='modal-body'>
                                        <p>{one.description}</p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button className='btn btn-secondary' data-dismiss='modal'>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card> 
                ))}
            </div>
        </div>
    )
}

export default Home;