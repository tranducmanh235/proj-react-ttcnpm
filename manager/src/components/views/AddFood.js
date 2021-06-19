import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container, Form, Col, Row, Button, Image
} from 'react-bootstrap'

const AddFood = () => {
    const [profileImg, setprofileImg] = useState('https://terroirauburn.com.au/wp-content/uploads/2018/04/blank-profile-picture-973460_960_720-700x700.png');
    
    const imageHandler = (event) => {
        const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2) {
                setprofileImg(reader.result);
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    const styleContainer = {
        width: '55%', 
        border: '3px solid #458bdb', 
        // backgroundColor: '#b2c4d8',
        padding: '15px'
    }

    return (
        <div style={{marginTop: '50px'}}>
            <Container style={styleContainer}>
                <Form>
                    <Form.Group as={Row}>
                        <Col className="border-bottom">
                            <center><Form.Label><h1>Thêm món ăn</h1></Form.Label></center>                       
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col xs={5}>
                            <div className="page">
                                <Container>
                                    <center>Thêm ảnh</center>
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
                                <Form.Control type="text" placeholder="Nhập tên món ăn" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="priceFood">
                            <Col>
                                <Form.Control type="text" placeholder="Nhập đơn giá" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="descriptionFood">
                            <Col>
                                <Form.Control as="textarea" placeholder="Mô tả" rows={6} />
                            </Col>
                        </Form.Group>
                        </Col>
                    </Row>
                    
                    <div className="text-right">
                        <Button variant="primary" type="submit" >
                            Hoàn thành
                        </Button>
                    </div>
                    
                </Form> 
            </Container>
        </div>
    );
};

export default AddFood;