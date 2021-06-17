import React, {useState, useContext, useEffect} from 'react';
import { FoodContext } from '../contexts/FoodContext';
import { Card, Form, Button, Modal } from 'react-bootstrap';

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

    const handleClose = () => setShow(false);

    // check da chon mon hay chua
    const handleShow = () => {
        if(countChecked < 1){
            alert('Vui lòng chọn món ăn!')
            return
        }
        setShow(true);
    }

    // ham xoa 
    const handleDeleteCheckBox = () => {
        var result = food
        for(let i = 0; i < food.length; i++) {
            var temp = [];
            for(let j = 0; j < listCheck.length; j++) {               
                if(food[i].foodID == Object.keys(listCheck[j])) 
                    temp.push(listCheck[j])
            }

            if(temp.length > 0) {
                if(Boolean(Object.values(temp[temp.length-1])) == true) {
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
        //setChecked(!checked);
    }
    //setFoodState([{_id: "60ad5abde581a5642444be1f", foodID: "20201", name: "Sườn heo hun khói", price: "299000", imageURL: "images/suonheohunkhoi.jpg",name: "Sườn heo hun khói",price: "299000"}])
   //console.log(Object.keys(listCheck[0]))
    //console.log(food)
    console.log(listCheck)
    // console.log(food)
    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>      
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
            <Button variant="primary" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteCheckBox}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default DeleteFood;