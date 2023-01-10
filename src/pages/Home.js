import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical,faTable,faTableList, faCartShopping, faSquareCheck,faBullhorn,faComment,faNoteSticky,faBookOpen, faPeopleGroup, faFaceGrinHearts} from '@fortawesome/free-solid-svg-icons';
import Availability from "./AddAvaliability";


const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {show ? <Availability show={show} handleClose={handleClose} handleShow={handleShow}/> : ''}
    <Container fluid>
      <Row className='top-section'>
        <Col>
          <div style={{color:"black"}}>Good Evening, Zaib</div>
          <div style={{color:"grey"}}>Manager Permission</div>
        </Col>
        <Col className='d-flex justify-content-end align-items-center gap-2'>
         <div>
           <Button className = "top-left" onClick={handleShow}>Add Reservation</Button>
           <FontAwesomeIcon icon={faBell} />
         </div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        </Col>
      </Row>
      <Row className="mb-3">
         <Col><div style={{background:"#ff9559"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faTable} color={"white"}/></div><div className='menu-text'>General</div></Col>         
         <Col><div style={{background:"#2196f3"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faTableList} /></div><div className='menu-text'>Floor Plan</div></Col>
         <Col><div style={{background:"#ff7495"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faSquareCheck} /></div><div className='menu-text'>Availability</div></Col>
         <Col><div style={{background:"#e8ba34"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faCartShopping} /></div><div className='menu-text'>Payment</div></Col>
         <Col><div style={{background:"#ff6759"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faBullhorn} /></div><div className='menu-text'>Marketing Automation</div></Col>
      </Row>
      <Row>
         <Col><div style={{background:"#4bb04f"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faComment} /></div><div className='menu-text'>Menu</div></Col>         
         <Col><div style={{background:"#4bb04f"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faNoteSticky} /></div><div className='menu-text'>Integration</div></Col>
         <Col><div style={{background:"#1fb37c"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faBookOpen} /></div><div className='menu-text'>Reports</div></Col>
         <Col><div style={{background:"#1fb37c"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faFaceGrinHearts} /></div><div className='menu-text'>My Guest</div></Col>
         <Col><div style={{background:"#1fb37c"}} className="menu-item rounded-3"><FontAwesomeIcon icon={faPeopleGroup} /></div><div className='menu-text'>People</div></Col>
       </Row>

    </Container>
    </>

  )
};

export default Home;