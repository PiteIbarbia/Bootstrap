import React from 'react';
import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group contorlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='example@email.com' />
                  <Form.Text className='text-muted'>We will never share you email address!</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group contorlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='secondary' type='submit'>Login</Button>
          </Form>
          <Card className="mb-3" style={{color: 'black'}}>
            <Card.Img src="https://picsum.photos/200/50"/>
            <Card.Body>
              <Card.Title>Card example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards.</Card.Text>
              <Button variant='primary'>Read more</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='success'>This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
