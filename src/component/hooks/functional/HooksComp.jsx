import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "reactstrap";
import axios from "axios";

export default function HooksComp() {
  // const [jumlah, setJumlah] = useState(0);
  // const [profil, setProfil] = useState({ nama: "", marga: "" });
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    console.log("Memanggil Use Effect");
    // setProfil({ nama: "Minato", marga: "Namikaze" });
    axios
      .get(`${window.api}/buku/?rest-key=${window.apikey}`, {
        headers: {
          Authorization: window.token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setBuku(res.data.result);
      });
  }, []);

  return (
    <Container>
      <h2>Data Buku</h2>
      <hr />
      <Table className="table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Penerbit</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item, index) => (
            <tr key={item.id_buku}>
              <td>{index + 1}</td>
              <td>{item.judul_buku}</td>
              <td>{item.penulis}</td>
              <td>{item.penerbit}</td>
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
