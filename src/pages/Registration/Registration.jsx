import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./src/actions";
// import PropTypes from "prop-types";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hadleRegister = () => {
    dispatch(registerUser(email, password));
  };

  return (
    <div>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

// Registration.propTypes = {};

export default RegistrationForm;
