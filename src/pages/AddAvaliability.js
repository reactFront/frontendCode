import React, { useState } from 'react';

import {Modal, Button, Form, Row, Col, Pagination} from 'react-bootstrap';


const Availability = (props)=> {
  const [active, setActive] = useState(1);
  const handleSetActive =(e) => {
   console.log('e=',e.target.text)
   setActive(e.target.text)
  }

const {show, handleClose} = props;


  return (
    <>
      <Modal size = "lg" show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Avaliability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
         <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Location</Form.Label>
            <Form.Select aria-label="Default select example">
               <option value="1">Delhi</option>
               <option value="2">Chandigarh</option>
               <option value="3">Jalandar</option>
            </Form.Select>
          </Col>
          </Row>
          <Row>
              <Col>             
               <Form.Label>Guest</Form.Label>
               <Pagination size="lg">
                 {[...Array(10)].map((x, i) =>
                 <Pagination.Item onClick ={handleSetActive} key={i} active={i == active-1}>
                  {i+1}
                </Pagination.Item>

                 )}
               </Pagination>
               </Col>
          </Row>
          <Row>
           <Col>
             <Form.Label>Shift</Form.Label>
            <Form.Select aria-label="Default select example">
               <option value="1">Day</option>
               <option value="2">Night</option>
            </Form.Select>

           </Col>
           <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="time" />
            </Form.Group>

           </Col>
           <Col>
             <Form.Label>Seating Area</Form.Label>
             <Form.Select aria-label="Default select example">
                <option value="1">Any</option>
                <option value="2">Other</option>
             </Form.Select>
           </Col>

          </Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Availability;

