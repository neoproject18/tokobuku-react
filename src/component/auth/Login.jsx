import React, { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import qs from "querystring";
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
import { AuthContext } from "../../App";
import { swal_alert } from "../../js/sweetshow";
import { Link } from "react-router-dom";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    axios
      .post(`${window.api}/login`, qs.stringify(requestBody), config)
      .then((res) => {
        if (res.data.status === true) {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        } else {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: res.data.message,
          });
        }
        console.log(res.status);
        swal_alert(res.status, res.data.message, true);
        throw res;
      });
    // .catch((error) => {
    //   let res = error.response;
    //   console.log(error.response.data);
    //   swal_alert(res.status, res.data.message, null);
    // });
  };

  const requestBody = {
    "rest-key": window.apikey,
    username: data.username,
    password: data.password,
  };

  const config = {
    headers: {
      Authorization: window.token,
      "Content-type": "application/x-www-form-urlencoded",
    },
  };

  return (
    <Fragment>
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
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Row>
                  <Label className="col-2 col-form-label">Username</Label>
                  <Col className="col-8">
                    <Input
                      type="text"
                      name="username"
                      value={data.email}
                      onChange={handleChange}
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
                      value={data.password}
                      onChange={handleChange}
                      placeholder="Masukkan Password"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label className="col-2"></Label>
                  <Col className="col-4">
                    <Button
                      type="submit"
                      color="primary"
                      disabled={data.isSubmitting}
                    >
                      {data.isSubmitting ? "...Loading" : "Login"}
                    </Button>
                    <Link to={"/buku/list"}>
                      <Button color="danger">Register</Button>
                    </Link>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
