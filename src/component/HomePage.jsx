import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const initialState = {
    nama: "",
    username: "",
    id_role: "",
    nama_role: "",
  };
  const [user, setUser] = useState(initialState);

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
      // console.log(user);
    } catch (e) {
      console.log(e);
    }
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
