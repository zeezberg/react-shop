import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

import { loginUser } from "../redux/actions";

const LoginForm = () => {
  const dispatch = useDispatch("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };
  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

// const Login = (props) => {
//   return <div>Login</div>;
// };

// Login.propTypes = {};

export default LoginForm;
