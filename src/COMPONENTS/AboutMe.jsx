import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutMe = () => {
  return (
    <Container fluid id='about'>
        <Row>
            <Col lg={12} className='p-0'>
                <div className='about-head'>
                    <h1><b>About Me</b></h1>
                </div>
                <div className='about-details'>
                    <p>
                        <em> 
                            MERN Stack Developer with internship experience. <br />Passionate about full
                        stack development. <br />Seeking an opportunity in a company to apply my
                        knowledge and skills about full-stack development <br /> and to develop scalable
                        and user-friendly applications.
                        </em>
                    </p>
                </div>
            </Col>
        </Row>

    </Container>
  )
}

export default AboutMe