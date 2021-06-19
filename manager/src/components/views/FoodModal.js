import React, { useContext, useState } from 'react'
import { FoodContext } from '../contexts/FoodContext'
import { Modal, Button ,Form } from 'react-bootstrap'
import NumberFormat from 'react-number-format';
const FoodModal = () => {
    const {foodState: {food}, showFoodModal, setShowFoodModal,change} = useContext(FoodContext)
    const closeDialog = () => {
        setShowFoodModal(false)
    }
    
    const [newFood,setNewFood]=useState(food)
    const tempFood={...newFood};
    //console.log(newFood)
    function _change(e){
             
        let name=e.target.name;
        let value=e.target.value;
        
        const tempFood1={[name]:value}
        const temp=String(Object.keys(tempFood1))
        tempFood[temp]=String(Object.values(tempFood1))
        setNewFood(tempFood)
    }
    function handleSave(){
        change(newFood)
        closeDialog()
    }
    return (
        <Modal show={showFoodModal} animation={false} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>{food.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Tên món ăn</Form.Label>
                <Form.Control size="lg" type="text" defaultValue={food.name} onChange={_change} name="name"/> 
                <Form>                  
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Miêu tả</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={food.description} onChange={_change} name="description"/>
                    </Form.Group>
                </Form>
                <Form.Label>Giá tiền </Form.Label>
                <NumberFormat thousandSeparator={true} name="price" onValueChange={(values=>{
                    const {formattedValue, value} = values;
                    tempFood['price']=formattedValue
                    setNewFood(tempFood)
                })}/><span>VND</span>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant='danger' onClick={closeDialog}>Close</Button>
                <Button variant='success' onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FoodModal