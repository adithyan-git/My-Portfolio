import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Skills = () => {
  return (
    <Container fluid className='padding-top'>
            <Row>
                <Col lg={12} className='p-0'>
                    <div className='skills'>
                        <h1><b>My Skills</b></h1>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/html.png" thumbnail />
                          <h5 className='skills-title'>HTML</h5>
                    </div>
                  
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/css.jpeg" thumbnail />
                        <h5 className='skills-title'>CSS</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0' >
                    <div className='skills-img'>
                        <Image src="IMAGES/javascript.jpeg" thumbnail />
                        <h5 className='skills-title'>JAVASCRIPT</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/bootstrap.jpeg" thumbnail />
                        <h5 className='skills-title'>BOOTSTRAP</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/react.png" thumbnail />
                        <h5 className='skills-title'>REACT.JS</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/mongodb.jpg" thumbnail />
                        <h5 className='skills-title'>MONGO DB</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/expressjs.png" thumbnail />
                        <h5 className='skills-title'>EXPRESS.JS</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/nodejs.jpeg" thumbnail />
                        <h5 className='skills-title'>NODE.JS</h5>
                    </div>
                </Col>
                <Col lg={4} className='p-0'>
                    <div className='skills-img'>
                        <Image src="IMAGES/CProgramming.jpg" thumbnail />
                        <h5 className='skills-title'>C</h5>
                    </div>
                </Col>
            </Row>
    </Container>
  )
}

export default Skills