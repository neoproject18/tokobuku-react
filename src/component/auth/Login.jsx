import React, { useContext, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { swal_alert } from "../../js/sweetshow";
import axios from "axios";
import qs from "querystring";
import { AuthContext } from "../../App";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const AuthLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${window.api}/login`,
          qs.stringify({
            "rest-key": window.apikey,
            username: username,
            password: password,
          })
        )
        .then((json) => {
          console.log(json.status);
          dispatch({
            type: "LOGIN",
            payload: json.data,
          });
          // localStorage.setItem("isAuthenticated", true);
          // localStorage.setItem("token", json.data.token);
          swal_alert(json.status, json.data.message, null);
          // navigate("/home");
          // navigate.router.replace("/home");
        })
        .catch((error) => {
          let json = error.response;
          console.log(error.response.data);
          swal_alert(json.status, json.data.message, null);
        });
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            Vertically centered hero sign-up Form
          </h1>
          <p className="col-lg-10 fs-4">
            Below is an example Form built entirely with Bootstrap’s Form
            controls. Each required Form group has a validation state that can
            be triggered by attempting to submit the Form without completing it.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <Form
            onSubmit={AuthLogin}
            className="p-4 p-md-5 border rounded-3 bg-light"
          >
            <FormGroup>
              <Row>
                <Label className="col-4 col-form-label">Username</Label>
                <Col className="col-8">
                  <Input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    placeholder="Masukkan Username"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label className="col-4 col-form-label">Password</Label>
                <Col className="col-8">
                  <Input
                    type="password"
                    name="password"
                    placeholder="*****"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              LOGIN
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </Form>
        </div>
      </div>
    </div>
  );
}
