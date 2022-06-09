import React, { useReducer } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";

const initialState = {
  jumlah: 1,
  harga_satuan: 10000,
  harga_total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        harga_total: state.harga_satuan * (state.jumlah + 1),
      };
    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        harga_total: state.harga_satuan * (state.jumlah - 1),
      };
    default:
      return state;
  }
};

export default function HooksReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <br />
      <Row>
        <Col xs="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://source.unsplash.com/640x480?technology"
              alt="Card"
            />
          </Card>
        </Col>
        <Col xs="6">
          <h3>Action Figure Naruto</h3>
          <p>Harga</p>
          <h3>Rp {count.harga_satuan}</h3>
          <p>Jumlah</p>
          <Row>
            <Col>
              <Button onClick={() => dispatch({ type: "tambah" })}>+</Button>
            </Col>
            <Col>{count.jumlah}</Col>
            <Col>
              <Button onClick={() => dispatch({ type: "kurang" })}>-</Button>
            </Col>
          </Row>
          <br />
          <Button color="success" size="lg">
            Total Rp. {count.harga_total}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
