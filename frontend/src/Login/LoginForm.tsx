import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      //TODO: tutaj logowanie
      console.log(values);
      navigate("/");
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper
          sx={{
            width: 600,
            height: 400,
            p: 5,
            borderRadius: 6,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ m: 2 }} component="h2">
            Zaloguj się
          </Typography>
          <TextField
            required
            id="username"
            label="Nazwa użytkownika"
            sx={{ m: 2 }}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextField
            required
            id="password"
            label="Hasło"
            type="password"
            sx={{ m: 2 }}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit" sx={{ m: 2 }} variant="contained">
            Zaloguj
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default LoginForm;
