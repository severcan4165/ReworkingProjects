import  Grid  from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center" spacing={2}>
      <Grid item xs={12} lg={3}>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item xs={12} lg={3}>
      <Link to="/login">Login</Link>
        
      </Grid>
      <Grid item xs={12} lg={3}>
      <Link to="/register">Register</Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
