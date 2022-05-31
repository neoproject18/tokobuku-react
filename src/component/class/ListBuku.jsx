import React, { PureComponent } from "react";
import axios from "axios";
import { Table, Button, Container, NavLink, Alert } from "reactstrap";
import { Link } from "react-router-dom";

export default class ListBuku extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      databuku: [],
      response: "",
      display: "none",
    };
  }

  // Component untuk load data dari server
  componentDidMount() {
    // console.log(`${window.api}/buku/?rest-key=${window.apikey}`);
    // axios({
    //   url: `${window.api}/buku/?rest-key=${window.apikey}`,
    //   method: "get",
    //   headers: {
    //     Authorization: window.token,
    //   },
    // }).then((res) => {
    //   console.log(res.data);
    //   this.setState({
    //     databuku: res.data.result,
    //   });
    // });
    axios
      .get(`${window.api}/buku/?rest-key=${window.apikey}`, {
        headers: {
          Authorization: window.token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          databuku: res.data.result,
        });
      });
  }

  render() {
    return (
      <Container>
        <h2>Data Buku</h2>
        <hr />
        <Link to="/buku/tambah">
          <Button className="mb-3" color="primary">
            Tambah Data
          </Button>
        </Link>
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Penerbit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.databuku.map((item, index) => (
              <tr key={item.id_buku}>
                <td>{index + 1}</td>
                <td>{item.judul_buku}</td>
                <td>{item.penulis}</td>
                <td>{item.penerbit}</td>
                <td>Edit | Hapus</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
