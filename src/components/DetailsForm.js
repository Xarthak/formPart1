import { Form, Button, Container, Card, Col, Row } from "react-bootstrap"

export default function DetailsForm() {

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
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Middle name</Form.Label>
                                        <Form.Control placeholder="Middle name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Email" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control placeholder="Phone number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Zip code</Form.Label>
                                        <Form.Control placeholder="Zip code" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select from list</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select from list</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Height</Form.Label>
                                        <Form.Control placeholder="Height" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control placeholder="Weight" />
                                    </Form.Group>
                                </Col>
                            </Row>
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