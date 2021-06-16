import React,{useState,useContext,useEffect} from 'react';
import { FoodContext } from '../contexts/FoodContext';
import { Card,Form,Button,Modal } from 'react-bootstrap';

const DeleteFood=()=>{
    const {foodState: {food}, getFood} = useContext(FoodContext);
    useEffect(() => getFood(), [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(){
        setChecked(!checked);
    }
    
    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>      
            <div className='row justify-content-center'>               
                { food.map((one) => (
                    <Card className='col-md-5 col-lg-3 m-3'>
                        <Form.Group className="mb-3" controlId={one.foodID} checked={checked} name={one.foodID} onChange={handleCheckboxChange}>
                            <Form.Check type="checkbox"/>
                        </Form.Group>
                        <Card.Img src={one.imageURL} alt='img' />
                        <Card.Body>
                            <Card.Title className='text-center font-weight-bold text-primary' >{one.name}</Card.Title>
                            <Card.Text className='text-center font-weight-bold'>{one.price} đ</Card.Text>
                        </Card.Body>                       
                    </Card> 
                ))}
                    
            </div>
            <Button variant="primary" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default DeleteFood;