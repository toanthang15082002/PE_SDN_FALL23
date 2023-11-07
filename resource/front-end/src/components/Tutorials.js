import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

const Tutorials = () => {
  const [tutorial, setTutorial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:9999/tutorials");
        setTutorial(result?.data?.data);
        console.log("data", result?.data?.data);
      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:9999/tutorials");
        setTutorial(result?.data?.data);
        console.log("data", result?.data?.data);
      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Link to={'/'}>Home page</Link>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>-- Select category to filter --</option>
              <option>Computer Science</option>
              <option>Computer Progamming</option>
              <option>Big Data & Analytics</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Row>
      <Row>
        
          {tutorial?.map((tutorial, index) => (
            <Col xl={3}>
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{tutorial.title}</Card.Title>
                <Card.Text>
                  Author: {tutorial.author}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Category: {tutorial.category}</ListGroup.Item>
                
              </ListGroup>
              <Card.Body>
                <Card.Link><Link>Comments</Link></Card.Link>
              </Card.Body>
            </Card>
            </Col>
          ))}
        
      </Row>
    </Container>
  );
};

export default Tutorials;