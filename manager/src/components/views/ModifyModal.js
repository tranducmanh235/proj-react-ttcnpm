import React, { useContext, useState } from 'react'
import { FoodContext } from '../contexts/FoodContext'
import { 
    Modal, Button, Form, Col, Row, Container, Image
} from 'react-bootstrap'

const FoodModal = () => {
    const {foodState: {food}, modifyFoodModal, setModifyFoodModal} = useContext(FoodContext)
    const closeDialog = () => {
        setModifyFoodModal(false)
    }

    // Chinh sua hinh anh
    const [profileImg, setprofileImg] = useState('https://terroirauburn.com.au/wp-content/uploads/2018/04/blank-profile-picture-973460_960_720-700x700.png');

    const imageHandler = (event) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2) {
                setprofileImg(reader.result);
            }
        } 
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <Modal show={modifyFoodModal} animation={false} onHide={closeDialog}>
            <Modal.Header closeButton>
                <center><Modal.Title><h2>Chỉnh sửa món ăn</h2></Modal.Title></center> 
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col xs={5}>
                            <div className="page">
                                <Container>
                                    <center>Chỉnh sửa ảnh</center>
                                    <div className="img-holder">
                                        <Image className="img-upload-pattern" src={profileImg} rounded />
                                    </div>

                                    <Form.Group>
                                        <Form.File name="image-upload" id="input-image" onChange={imageHandler} />
                                    </Form.Group>

                                    <Form.Group controlId="input-image" className="choose-image">
                                        <Form.Label className="image-upload" >Chọn ảnh</Form.Label>
                                    </Form.Group>
                                </Container>
                            </div>
                        </Col>
                        <Col xs={7}>
                        <Form.Group as={Row} controlId="nameFood">
                            <Col>
                                <Form.Control type="text" placeholder="Sửa tên món ăn" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="priceFood">
                            <Col>
                                <Form.Control type="text" placeholder="Sửa đơn giá" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="descriptionFood">
                            <Col>
                                <Form.Control as="textarea" placeholder="Sửa mô tả" rows={6} />
                            </Col>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={closeDialog} type="submit" >
                    Hoàn thành
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FoodModal