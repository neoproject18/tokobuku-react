import React, { PureComponent } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Alert,
  Label,
  Input,
  Select,
  Button,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class TambahBuku extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      judul: "",
      penulis: "",
      tahun: "",
      penerbit: "",
      id_kategori: "",
      jumlah: "",
      response: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveBuku = () => {
    // axios
    //   .post(
    //     `${window.api}/buku`,
    //     {
    //       headers: {
    //         Authorization: window.token,
    //       },
    //       body: {
    //         "rest-key": window.apikey,
    //         judul: this.state.judul,
    //         penulis: this.state.penulis,
    //         tahun: this.state.tahun,
    //         penerbit: this.state.penerbit,
    //         //   id_kategori: this.state.id_kategori,
    //         jumlah: this.state.jumlah,
    //       },
    //     },
    //     {
    //       "rest-key": window.apikey,
    //       judul: this.state.judul,
    //       penulis: this.state.penulis,
    //       tahun: this.state.tahun,
    //       penerbit: this.state.penerbit,
    //       //   id_kategori: this.state.id_kategori,
    //       jumlah: this.state.jumlah,
    //     }
    //   )
    //   .then((json) => {
    //     console.log(json.data.message);
    //     this.setState({
    //       response: json.data.message,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
    axios({
      url: `${window.api}/buku`,
      method: "post",
      headers: {
        Authorization: window.token,
      },
      data: {
        "rest-key": window.apikey,
        judul: this.state.judul,
        penulis: this.state.penulis,
        tahun: this.state.tahun,
        penerbit: this.state.penerbit,
        id_kategori: this.state.id_kategori,
        jumlah: this.state.jumlah,
      },
    }).then((json) => {
      this.setState({
        response: json.data.message,
      });
    });
  };

  render() {
    return (
      <Container>
        <h3>Tambah Data Buku</h3>
        <hr />
        <Form>
          <Col>
            <FormGroup>
              <Row>
                <Label className="col-2 col-form-label">Judul Buku</Label>
                <Col className="col-8">
                  <Input
                    type="text"
                    name="judul"
                    value={this.state.judul}
                    onChange={this.handleChange}
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
                    value={this.state.penulis}
                    onChange={this.handleChange}
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
                    value={this.state.penerbit}
                    onChange={this.handleChange}
                    placeholder="Masukkan Penerbit Buku"
                  />
                </Col>
                <Label className="col-2 col-form-label">Tahun</Label>
                <Col className="col-2">
                  <Input
                    type="number"
                    name="tahun"
                    value={this.state.tahun}
                    onChange={this.handleChange}
                    placeholder="Tahun Terbit"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label className="col-2 col-form-label">Kategori</Label>
                <Col className="col-4">
                  <select className="form-control" name="id_kategori">
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
                    value={this.state.jumlah}
                    onChange={this.handleChange}
                    placeholder="Jumlah Buku"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label className="col-2"></Label>
                <Col className="col-4">
                  <Button type="submit" color="primary" onClick={this.saveBuku}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}
