import React from "react";
import Recipe from "./Recipe";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Recipe dishName='Paneer' />
                    </Col>
                    <Col md={4}>
                        <Recipe dishName='Chowmin'  />
                    </Col>
                    <Col md={4}>
                        <Recipe dishName='Chicken'  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;