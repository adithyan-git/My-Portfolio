import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Resume = () => {
  return (
    <Container fluid className='padding-top'>
        <Row>
            <Col lg={12} className='p-0'>
                <div className='resume'>
                    <h1><b>My-Resume</b></h1>
                </div>
            </Col>
            <Col lg={12} className='p-0'>
                <div className='resume-img'>
                    <Image src="IMAGES/resume.png" thumbnail />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Resume