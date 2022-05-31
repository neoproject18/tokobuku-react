// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/class/Navbar";
// import Home from "./component/functional/Home";
// import Beranda from "./component/class/Beranda";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/functional/HomePage";
import About from "./component/functional/About";
import Detail from "./component/functional/Detail";
import ListBuku from "./component/class/ListBuku";
import TambahBuku from "./component/class/TambahBuku";

window.api = "http://localhost/restperpus/";
window.apikey = "123456789";
window.token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hbmFnZXIiLCJuYW1hX3VzZXIiOiJNYW5hZ2VyIiwicGFzc3dvcmQiOiJiNDU2ZjMwODczZTNmYmJlNzBkYmIyZTY3NzU4NDNkOTBlYjVhOGZiNDcxYjFiNDI2OThkZTg4OTc4M2E0ZDEwYjk1ZjFmODExNGUzMWY5NzBkOWI3MTQzOWU1ZmYwZDI4MWExMzFmMGE0ZDA2MWU3YTgxYjRjNjlmMjc5MzI1ZiIsImlkX3JvbGUiOiIxIiwiaWF0IjoxNjQyMzg2MjE0LCJleHAiOjE5NTM0MjYyMTR9.aAMkLs1D4TrX_afpQBtpSbYpQCvo-5f1jbLuH1K0xV8";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/detail/:id" exact element={<Detail />}></Route>
          <Route path="/buku/list" exact element={<ListBuku />}></Route>
          <Route path="/buku/tambah" exact element={<TambahBuku />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
