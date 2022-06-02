import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "querystring";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
} from "reactstrap";
import { swal_alert } from "../../js/sweetshow";

export default function EditBuku() {
  const location = useLocation();
  console.log(location.state);
  const [buku, setBuku] = useState({
    id_buku: location.state.id_buku,
    judul: location.state.judul,
    penulis: location.state.penulis,
    tahun: location.state.tahun,
    penerbit: location.state.penerbit,
    id_kategori: location.state.id_kategori,
    jumlah: location.state.jumlah,
  });

  const handleChange = (e) => {
    setBuku({ [e.target.name]: e.target.value });
    console.log(buku);
  };

  const updateBuku = (e) => {
    e.preventDefault();
    console.log(buku);
    axios
      .put(
        `${window.api}/buku`,
        qs.stringify({
          "rest-key": window.apikey,
          judul: buku.judul,
          penulis: buku.penulis,
          tahun: buku.tahun,
          penerbit: buku.penerbit,
          id_kategori: buku.id_kategori,
          jumlah: buku.jumlah,
        }),
        {
          headers: {
            Authorization: window.token,
          },
        }
      )
      .then((json) => {
        console.log(json.status);
        swal_alert(json.status, json.data.message, true);
      })
      .catch((error) => {
        let json = error.response;
        console.log(error.response.data);
        swal_alert(json.status, json.data.message, null);
      });
  };

  return (
    <Container>
      <h3>Ubah Data Buku</h3>
      <hr />
      <Form onSubmit={updateBuku}>
        <Col>
          <FormGroup>
            <Row>
              <Label className="col-2 col-form-label">Judul Buku</Label>
              <Col className="col-8">
                <Input
                  type="text"
                  name="judul"
                  value={buku.judul}
                  onChange={handleChange}
                  placeholder="Masukkan Judul Buku"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Label className="col-2 col-form-label">Penulis</Label>
              <Col className="col-8">
                <Input
                  type="text"
                  name="penulis"
                  value={buku.penulis}
                  onChange={handleChange}
                  placeholder="Masukkan Penulis Buku"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Label className="col-2 col-form-label">Penerbit</Label>
              <Col className="col-4">
                <Input
                  type="text"
                  name="penerbit"
                  value={buku.penerbit}
                  onChange={handleChange}
                  placeholder="Masukkan Penerbit Buku"
                />
              </Col>
              <Label className="col-2 col-form-label">Tahun</Label>
              <Col className="col-2">
                <Input
                  type="number"
                  name="tahun"
                  value={buku.tahun}
                  onChange={handleChange}
                  placeholder="Tahun Terbit"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Label className="col-2 col-form-label">Kategori</Label>
              <Col className="col-4">
                <select
                  className="form-control"
                  name="id_kategori"
                  onChange={handleChange}
                >
                  <option value="">== Pilih ==</option>
                  <option value={1}>Buku Pelajaran</option>
                  <option value={2}>Novel</option>
                  <option value={3}>Komik</option>
                </select>
              </Col>
              <Label className="col-2 col-form-label">Jumlah</Label>
              <Col className="col-2">
                <Input
                  type="number"
                  name="jumlah"
                  min="0"
                  value={buku.jumlah}
                  onChange={handleChange}
                  placeholder="Jumlah Buku"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Label className="col-2"></Label>
              <Col className="col-4">
                <Button type="submit" color="primary">
                  Simpan
                </Button>
                <Link to={"/buku/list"}>
                  <Button color="danger">Kembali</Button>
                </Link>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}
