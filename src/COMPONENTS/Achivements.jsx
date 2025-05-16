import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Achivements = () => {
  return (
   <Container fluid>
    <Row>
        <Col lg={12} className='p-0'>
            <div className='achivements'>
                  <h1><b>Achivements</b></h1>
            </div>
        </Col>
        <Col lg={6} className='p-0'>
            <div className='achivement-img'>
                <img src="IMAGES/webdesign.jpeg" alt="" />
            </div>
        </Col>
        <Col lg={6} className='p-0'>
            <div className='achivement-details'>
                    <h2> Web Designing Challenge </h2>
                    <h4>-Futura Labs, Calicut</h4>
                    <p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
                                </svg>  <i> Successfully completed a 
                                            website UI design challenge 
                                            within the given timeframe 
                                        </i>
                    </p>
            </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Achivements