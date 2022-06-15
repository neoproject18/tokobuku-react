import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Container } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "querystring";
import { swal_alert, swal_confirm } from "../../js/sweetshow";
import { AuthContext } from "../../App";

export default function ListBuku() {
  const { state, dispatch } = useContext(AuthContext);
  const [buku, setBuku] = useState([]);
  window.token = localStorage.getItem("token");

  const timeout = () => {
    setTimeout(() => {
      // console.log("Token telah berakhir");
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
    }, state.token_expired);
  };

  const fetchData = () => {
    axios
      .get(`${window.api}/buku?rest-key=${window.apikey}`, {
        headers: {
          Authorization: window.token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setBuku(res.data.result);
      });
  };

  useEffect(() => {
    fetchData();
    timeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBuku = (idbuku) => {
    console.log(buku);
    axios
      .delete(`${window.api}/buku`, {
        data: qs.stringify({
          "rest-key": window.apikey,
          id_buku: idbuku,
        }),
        headers: {
          Authorization: window.token,
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((json) => {
        console.log(json.status);
        setBuku(buku.filter((buku) => buku.id_buku !== idbuku));
        swal_alert(json.status, json.data.message, null);
      })
      .catch((error) => {
        let json = error.response;
        console.log(error.response);
        swal_alert(json.status, json.data.message, null);
      });
    // this.props.his
  };

  return (
    <Container>
      <h2>Data Buku</h2>
      {dispatch.state}
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
          {buku.map((item, index) => (
            <tr key={item.id_buku}>
              <td>{index + 1}</td>
              <td>{item.judul_buku}</td>
              <td>{item.penulis}</td>
              <td>{item.penerbit}</td>
              <td>
                <Link
                  to={"/buku/edit"}
                  state={{
                    id_buku: item.id_buku,
                    judul: item.judul_buku,
                    penulis: item.penulis,
                    penerbit: item.penerbit,
                    tahun: item.tahun_terbit,
                    id_kategori: item.id_kategori,
                    jumlah: item.jumlah,
                  }}
                >
                  <Button color="warning"> Edit</Button>
                </Link>
                <span className="m-1" />
                <Button
                  color="danger"
                  onClick={() =>
                    swal_confirm("Ingin menghapus data?", () =>
                      deleteBuku(item.id_buku)
                    )
                  }
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    // <>
    //   <h1>Profil Pengguna</h1>
    //   <p>Nama: {profil.nama}</p>
    //   <p>Marga: {profil.marga}</p>
    //   <h1>{jumlah}</h1>
    //   <button onClick={() => setJumlah(jumlah + 1)}>Click</button>
    // </>
  );
}
