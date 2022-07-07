import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className='title'>Welcome to Zippy Notes</h1>
                            <p className='subtitle'>One Safe place for all your notes.</p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size="lg" className='landingbutton'>Login</Button>
                            </a>
                            <a href='/login'>
                                <Button size="lg"  className='landingbutton' variant="outline-primary">SignUp</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default LandingPage