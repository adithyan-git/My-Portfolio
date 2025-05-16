import React from 'react'
import {Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <Container fluid className='padding-top'>
        <Row>
            <Col lg={12} className='p-0'>
                <div className='project'>
                    <h1><u>My - Projects</u></h1>
                </div>
            </Col>
            <Col lg={6} className='p-0'>
                <div className='first-project'>
                    <h1><b><Link to={'https://github.com/adithyan-git/adithyan-git-Library-Management-System-main.git'}>BOOKSPHERE</Link></b></h1> 
                    <p>
                       <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                         Developed a full-stack LMS to manage books, users, and 
                         borrowing activities.
                       </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        Implemented secure user authentication, CRUD operations, 
                        and a responsive UI using React.js 
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        Built RESTful APIs for seamless communication between 
                        frontend and backend.
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                         Enabled librarians to maintain book inventory and users to 
                        search and borrow books
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        Ensured efficient digital record-keeping and streamlined library 
                        workflows to enhance user experience
                    </i>
                   </p>
                </div>
            </Col>
            <Col lg={6} className='p-0'>
                <div className='first-carousel'>
                    <Carousel>
      <Carousel.Item>
        <img src="IMAGES/bookspherelogin.png" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/lmsprofile.png" alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/allbooks.png" alt="" />
        
      </Carousel.Item>
                    </Carousel>
                </div>
            </Col>
            <Col lg={6} className='p-0'>
                <div className='second-carousel'>
                     <Carousel>
      <Carousel.Item>
        <img src="IMAGES/eventlogin.png" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/eventprofile.png" alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/event.png" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/addevent.png" alt="" />
      </Carousel.Item>
                    </Carousel> 
                </div>
            </Col>
            <Col lg={6} className='p-0'>
                <div className='first-project'>
                    <h1><b><Link to={'https://github.com/adithyan-git/event-management-system.git'}>EVENT MANAGEMENT SYSTEM </Link></b></h1> 
                    <p>
                       <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                         Developed a full-stack EMS to manage event creation, registration, 
                        and user interaction 
                       </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        Implemented secure user authentication and personal profile 
                        management  
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                       Designed an admin dashboard for managing user accounts and 
                        overseeing event activity .
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                         Built RESTful APIs for smooth frontend-backend integration and 
                        real-time data handling 
                    </i>
                   </p>
                   <p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        Ensured a responsive and accessible UI using HTML, CSS, and 
                        JavaScript
                    </i>
                   </p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Projects