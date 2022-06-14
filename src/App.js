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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

// window.api = "https://dev.neoproject.info/restperpus";
window.api = "http://localhost/restperpus";
window.apikey = "123456789";
window.token = localStorage.getItem("token");

// Context
export const AuthContext = createContext();

// Initial State
const initialState = {
  isAuthenticated: false,
  token: null,
  token_expired: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Username: " + action.payload.result.username);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", action.payload.token);
      console.log(jwtDecode(action.payload.token).exp);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        token_expired: jwtDecode(action.payload.token).exp,
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
          <Route
            exact
            path="/"
            element={isAuthenticated ? <HomePage /> : <Login />}
          />
          {/* <Route
            exact
            path="/home"
            element={
              <>
                <HomePage />
              </>
            }
          /> */}
          {isAuthenticated ? (
            <>
              <Route path="/about" exact element={<About />}></Route>
              <Route path="/detail/:id" exact element={<Detail />}></Route>
              <Route path="/buku/list" exact element={<ListBuku />}></Route>
              <Route path="/buku/tambah" exact element={<TambahBuku />}></Route>
              <Route path="/buku/edit" exact element={<EditBuku />}></Route>
              <Route path="/kelas" exact element={<KelasComp />}></Route>
              <Route path="/hooks" exact element={<HooksComp />}></Route>
              <Route path="/reducer" exact element={<HooksReducer />}></Route>
            </>
          ) : (
            <Route path="*" exact element={<Navigate to="/" replace />}></Route>
          )}
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
