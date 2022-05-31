import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import CardComp from "./CardComp";

export default function About() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Ini adalah halaman ABOUT</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Container className="mt-5">
        <Row xs="3">
          <Col>
            <CardComp id="1" judul="Belajar React" tanggal="22/05/2022" />
          </Col>
          <Col>
            <CardComp id="2" judul="Belajar React 2" tanggal="23/05/2022" />
          </Col>
          <Col>
            <CardComp id="3" judul="Belajar React 3" tanggal="24/05/2022" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
