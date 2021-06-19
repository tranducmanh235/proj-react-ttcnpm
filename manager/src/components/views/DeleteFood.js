import React, {useState, useContext, useEffect} from 'react';
import { FoodContext } from '../contexts/FoodContext';

import { 
    Card, Form, Button, Modal, Container, Row, Col, Alert 
} from 'react-bootstrap';

const DeleteFood = () => {
    
    // dung de check da chon mon hay chua
    const [countChecked, setcountChecked] = useState(0);

    // lay du lieu tu component FoodContext
    const {foodState: {food}, getFood, change} = useContext(FoodContext); 

    // check da chon mon hay chua
    const [listCheck, setListCheck] = useState([]);

    // goi ham getFood()
    useEffect (       
        () => {           
            getFood();           
        }, []
    )

    // show Modal
    const [show, setShow] = useState(false);

    // khi Click [huy] trong Modal
    const handleClose = () => setShow(false);

    // check da chon mon hay chua
    const handleShow = () => {
        if(countChecked < 1){
            alert('Vui lòng chọn món ăn!')
            return // <Alert>Vui lòng chọn món ăn!</Alert>
        }
        setShow(true);
    }

    // ham xu ly khi Click [xoa] trong Modal
    const handleDeleteCheckBox = () => {
        var result = food

        for(let i = 0; i < food.length; i++) {
            var temp = [];
            for(let j = 0; j < listCheck.length; j++) {               
                if(food[i].foodID == Object.keys(listCheck[j])) 
                    temp.push(listCheck[j])
            }

            if(temp.length > 0) {
                if(Boolean(Object.values(temp[temp.length - 1])) == true) {
                    result = result.filter(item => {
                        return item.foodID != String(Object.keys(temp[temp.length - 1]))
                    })  
                }
            }
        }
        
        change({food:result})
        setcountChecked(0)
        handleClose()
        setListCheck([])
    }

    // ham de set gia tri countChecked => xem da check mon an chua
    function handleCheckboxChange(e) {

        var name = e.target.name
        let value = e.target.checked
        var ObjCheck = {[name]:value}

        // ... sao chep sang bien moi, doi bien moi thi cu k doi
        let tempListCheck = [...listCheck]
        tempListCheck.push(ObjCheck)
        setListCheck(tempListCheck)
        
        if(e.target.checked === true)
            setcountChecked(countChecked + 1);
        else 
            setcountChecked(countChecked - 1);
    }
    
    //console.log(listCheck)

    // --------- CSS --------- //
    const styleContainer = {
        marginTop: '35px',
        marginBottom: '35px',
        // border: '1px solid #ccc',
        border: '3px solid #458bdb',
        padding: '20px',
    }

    const stylebtnDelete = {
        paddingLeft: '30px',
        paddingRight: '30px',
        marginLeft: '46%',
        marginTop: '20px'
    }

    const stylebtnModal = {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
    
    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'> 
            <Container style={styleContainer}>
                <Form.Group as={Row}>
                    <Col className="border-bottom">
                        <center><Form.Label><h1>Xóa món ăn</h1></Form.Label></center>                       
                    </Col>
                </Form.Group>
                <div className='row justify-content-center'>               
                    { food.map((one) => (
                        <Card className='col-md-5 col-lg-3 m-3' key={one._id}>
                            <Form.Group className="mb-3" controlId={one.foodID}  >
                                <Form.Check type="checkbox" name={one.foodID} onChange={handleCheckboxChange}/>
                            </Form.Group>
                            <Card.Img src={one.imageURL} alt='img' />
                            <Card.Body>
                                <Card.Title className='text-center font-weight-bold text-primary' >{one.name}</Card.Title>
                                <Card.Text className='text-center font-weight-bold'>{one.price} đ</Card.Text>
                            </Card.Body>                       
                        </Card> 
                    ))}  
                </div>
                <Button variant="primary" style={stylebtnDelete} onClick={handleShow}>
                    Xóa   
                </Button>

                {/*  ----- Modal ----- */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
                    <Modal.Footer>
                        <Button style={stylebtnModal} variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button style={stylebtnModal} variant="primary" onClick={handleDeleteCheckBox}>
                            Xóa
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default DeleteFood;