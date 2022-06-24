import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { swal_ok } from "../js/sweetshow";

export default function HomePage() {
  const { state, dispatch } = useContext(AuthContext);
  const initialState = {
    nama: "",
    username: "",
    id_role: "",
    nama_role: "",
  };
  const [user, setUser] = useState(initialState);

  window.timeout = () => {
    // console.log(state.token_expired);
    setTimeout(() => {
      console.log("Sesi telah berakhir");
      swal_ok(403, "Sesi telah berakhir", () => {
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
      });
    }, state.token_expired);
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const jwt_decode = jwtDecode(token);
      // console.log(jwt_decode);
      setUser({
        nama: jwt_decode.nama_user,
        username: jwt_decode.username,
        id_role: jwt_decode.id_role,
        nama_role: jwt_decode.nama_role,
      });
      window.timeout();
      // console.log(user);
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <title>TOKOBUKU</title>
          <span className="fs-4">Welcome Back, {user.nama}</span>
        </a>
      </header>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
    </div>
  );
}
