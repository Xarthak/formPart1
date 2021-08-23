import React, { useState } from 'react';
import { Form, Button, Container, Card, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function performClick(e) {
        e.preventDefault()
        
    }

    return (
        <>
            <Container>
                <Col></Col>
                <Card>
                    <Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(t) => setEmail(t.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(t) => setPassword(t.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={performClick}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Card>
                <Col></Col>
            </Container>
        </>
    );
}