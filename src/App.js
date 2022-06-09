import Login from "./component/auth/Login";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import About from "./component/functional/About";
import Detail from "./component/functional/Detail";
import KelasComp from "./component/hooks/class/KelasComp";
import HooksComp from "./component/hooks/functional/HooksComp";
import ListBuku from "./component/buku/ListBuku";
import TambahBuku from "./component/buku/TambahBuku";
import EditBuku from "./component/buku/EditBuku";
import HooksReducer from "./component/hooks/functional/HooksReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import jwtDecode from "jwt-decode";

window.api = "http://localhost/restperpus";
window.apikey = "123456789";
// window.token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hbmFnZXIiLCJuYW1hX3VzZXIiOiJNYW5hZ2VyIiwicGFzc3dvcmQiOiJiNDU2ZjMwODczZTNmYmJlNzBkYmIyZTY3NzU4NDNkOTBlYjVhOGZiNDcxYjFiNDI2OThkZTg4OTc4M2E0ZDEwYjk1ZjFmODExNGUzMWY5NzBkOWI3MTQzOWU1ZmYwZDI4MWExMzFmMGE0ZDA2MWU3YTgxYjRjNjlmMjc5MzI1ZiIsImlkX3JvbGUiOiIxIiwiaWF0IjoxNjQyMzg2MjE0LCJleHAiOjE5NTM0MjYyMTR9.aAMkLs1D4TrX_afpQBtpSbYpQCvo-5f1jbLuH1K0xV8";

// Context
export const AuthContext = createContext();

// Initial State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Username: " + action.payload.result.username);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {isAuthenticated ? <NavBar /> : ""}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/detail/:id" exact element={<Detail />}></Route>
          <Route path="/buku/list" exact element={<ListBuku />}></Route>
          <Route path="/buku/tambah" exact element={<TambahBuku />}></Route>
          <Route path="/buku/edit" exact element={<EditBuku />}></Route>
          <Route path="/kelas" exact element={<KelasComp />}></Route>
          <Route path="/hooks" exact element={<HooksComp />}></Route>
          <Route path="/reducer" exact element={<HooksReducer />}></Route>
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
