import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Education = () => {
  return (
    <Container fluid>
        <Row>
            <Col lg={12} className='p-0'>
                <div className='education'>
                    <h1><b>Education</b></h1>
                </div>
            </Col>
            <Col lg={4} className='p-0'>
                <div className='education-card'>
                <Card >
                    <div className='card-img'>
                        <img src="IMAGES/uhhss.jpg" alt="" />
                    </div>
                <Card.Body>
                    <Card.Title>UHHSS CHALIYAM, CALICUT</Card.Title>
                    <h6><em> - 2019</em> </h6>
                    <Card.Text>
                        <em> SSLC | 92.00%</em>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </Col>
             <Col lg={4} className='p-0'>
                <div className='education-card'>
                <Card >
                    <div className='card-img'>
                        <img src="IMAGES/uhhss.jpg" alt="" />
                    </div>
                <Card.Body>
                    <Card.Title> UHHSS CHALIYAM, CALICUT</Card.Title>
                    <h6><em>2019 - 2021</em></h6>
                    <Card.Text>
                     <em>Plus 2 (HSE) | 89.00%</em>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </Col>
             <Col lg={4} className='p-0'>
                <div className='education-card'>
                <Card >
                <div className='card-img'>
                    <img src="IMAGES/jdt.jpg" alt="" />
                </div>
                <Card.Body>
                    <Card.Title>JDT ISLAM COLLAGE OF ARTS AND SCIENCE</Card.Title>
                    <h6> <em>2021 - 2024</em></h6>
                    <Card.Text>
                    <em>B.Sc. Computer Science | CGPA - 6.950 First Class</em>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Education