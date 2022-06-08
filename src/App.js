import React, { useReducer, createContext, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import HomePage from "./component/functional/HomePage";
import MenuBar from "./component/template/MenuBar";

window.api = "http://localhost/restperpus";
window.apikey = "123456789";
window.token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1hbmFnZXIiLCJuYW1hX3VzZXIiOiJNYW5hZ2VyIiwicGFzc3dvcmQiOiJiNDU2ZjMwODczZTNmYmJlNzBkYmIyZTY3NzU4NDNkOTBlYjVhOGZiNDcxYjFiNDI2OThkZTg4OTc4M2E0ZDEwYjk1ZjFmODExNGUzMWY5NzBkOWI3MTQzOWU1ZmYwZDI4MWExMzFmMGE0ZDA2MWU3YTgxYjRjNjlmMjc5MzI1ZiIsImlkX3JvbGUiOiIxIiwiaWF0IjoxNjQyMzg2MjE0LCJleHAiOjE5NTM0MjYyMTR9.aAMkLs1D4TrX_afpQBtpSbYpQCvo-5f1jbLuH1K0xV8";

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
      localStorage.setItem("user", JSON.stringify(action.payload.result));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.result,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.isAuthenticated);

  return (
    <Router>
      <Fragment>
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <MenuBar />
          {/* {!state.isAuthenticated ? (
            <Navigate to="/" replace="true" />
          ) : (
            <Navigate to="/homepage" replace="true" />
          )} */}
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/homepage" exact element={<HomePage />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
          </Routes>
        </AuthContext.Provider>
      </Fragment>
    </Router>
  );
}

export default App;
