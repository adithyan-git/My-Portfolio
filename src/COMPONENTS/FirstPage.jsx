import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const FirstPage = () => {
  return (
    <Container fluid className='padding-top'>
        <Row>
            <Col lg={6} className='p-0'>
                <div className='name-div' >
                      
                        <div className='details-div'>
                                      
                                        <h2><i>Hello,</i></h2>
                                    <h1><span><i>Iam</i></span> <i><b>ADITHYAN N</b></i></h1>
                                    <h3> <i><b>MERNSTACK</b></i> <span><i>Developer</i></span> </h3>         
                        </div>
                       

                </div>
            </Col>
            <Col lg={6} className='p-0'>
                <div className='img-main-div'>       
                   <div className='img-main-sub-div'>
                         <Image src="IMAGES/adithyanimg.jpg" thumbnail  />
                    </div>            
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FirstPage