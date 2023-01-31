import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import axios from "axios";
const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:5084/api/auth/login", { username: values.username, password: values.password })
        .then((response) => {
          sessionStorage.setItem("token", response.data.token);

          var role = response.data.userRole;

          if(role === "") {
            navigate("/admin");
          }
          else if(role === "") {
            navigate("/myoffers");
          }
          else {
            navigate("/offers");
          }
        })
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
          { t("login") }
          </Typography>
          <TextField
            required
            id="username"
            label={ t("admin.userList.username") }
            sx={{ m: 2 }}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextField
            required
            id="password"
            label={ t("password") }
            type="password"
            sx={{ m: 2 }}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit" sx={{ m: 2 }} variant="contained">
            { t("login") }
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default LoginForm;
