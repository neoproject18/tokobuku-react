import React from "react";
import {
  Button,
  Card,
  CardImg,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://source.unsplash.com/640x480?technology"
              alt="Card"
            />
          </Card>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Row>
                <Label className="col-2 col-form-label">Username</Label>
                <Col className="col-8">
                  <Input
                    type="text"
                    name="username"
                    placeholder="Masukkan Username"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label className="col-2 col-form-label">Password</Label>
                <Col className="col-8">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Masukkan Password"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label className="col-2"></Label>
                <Col className="col-4">
                  <Button type="submit" color="primary"></Button>
                  <Link>
                    <Button color="danger">Register</Button>
                  </Link>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
