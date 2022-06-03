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
  const [judul, setJudul] = useState(location.state.judul);
  const [penulis, setPenulis] = useState(location.state.penulis);
  const [tahun, setTahun] = useState(location.state.tahun);
  const [penerbit, setPenerbit] = useState(location.state.penerbit);
  const [id_kategori, setIdKategori] = useState(location.state.id_kategori);
  const [jumlah, setJumlah] = useState(location.state.jumlah);

  const updateBuku = (e) => {
    e.preventDefault();
    // console.log(buku);
    axios
      .put(
        `${window.api}/buku`,
        qs.stringify({
          "rest-key": window.apikey,
          id_buku: location.state.id_buku,
          judul: judul,
          penulis: penulis,
          tahun: tahun,
          penerbit: penerbit,
          id_kategori: id_kategori,
          jumlah: jumlah,
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
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
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
                  value={penulis}
                  onChange={(e) => setPenulis(e.target.value)}
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
                  value={penerbit}
                  onChange={(e) => setPenerbit(e.target.value)}
                  placeholder="Masukkan Penerbit Buku"
                />
              </Col>
              <Label className="col-2 col-form-label">Tahun</Label>
              <Col className="col-2">
                <Input
                  type="number"
                  name="tahun"
                  value={tahun}
                  onChange={(e) => setTahun(e.target.value)}
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
                  value={id_kategori}
                  onChange={(e) => setIdKategori(e.target.value)}
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
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
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
