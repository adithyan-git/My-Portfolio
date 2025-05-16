import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Certifications = () => {
  return (
    <section className='certification-section'>
      <Container fluid>
        <Row>
            <Col lg={12} className='p-0'>
                <div className='certification'>
                    <h1><b>Certifications</b></h1>
                </div>
            </Col>
            <Col lg={4} className='p-0'>
              <div className='certification-card'>
                <Card>
                    <div className='certification-card-img'>
                        <img src="IMAGES/ui-ux.webp" alt="" />
                    </div>
                <Card.Body>
                    <Card.Title>UI/UX Designing Certification </Card.Title>
                    <h6><em>Futura Labs, Calicut</em> </h6>
                    <Card.Text>
                        <i>
                            Completed a short-term 
                            internship in UI/UX design under 
                            the guidance of senior developers 
                            at Futura Labs Technologies LLP, 
                            Calicut.
                         </i>
                    </Card.Text>
                </Card.Body>
                </Card>
              </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Certifications