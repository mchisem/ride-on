import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Link, withRouter, Redirect } from "react-router-dom";
import { useAuth } from "./auth";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import "../auth/auth.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://github.com/sophiaorlando/Project3">
        Ride On
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function SignInSide(props) {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Sign In");
  const { setUserName, setAuthToken, username } = useAuth();

  const authenticate = async () => {
        const basePath = "api/auth/"; // server side path
        let url = basePath;
    
        if (action === "Log In") {
          url += "login";
        }
    
        console.log(url);
        console.log(action);
    
        const response = await fetch(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username: userName, password }),
        });
    
        const json = await response.json();
        console.log(json);
        if (response.ok) {
          setAuthToken(json.token);
          setUserName(json.user.username); // auth context provider.
          setUsername(json.user.username);
        } else {
          alert(json.msg);
        }
      };
    
      useEffect(() => {
        if (props.action) {
          setAction(props.action);
        } else {
          if (props.location.pathname === "/signup") {
            setAction("Sign Up");
          } else {
            setAction("Log In");
          }
        }
      }, [props]);
      
        if (username) {
          return <Redirect to="/home" />;
        }

  return (
    <Grid id="auth-grid" container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="image" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {action}
          </Typography>
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="User Name"
              autoFocus
              name="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={() => authenticate()}>
              {action}
            </Button>
            <Grid container>
              <Grid item xs>
                {action === "Log In" ? (
                  <Link to="/signup">Don't have an account? Sign Up</Link>
                  ) : (
                  <Link to="/login">Already Have An Account? Log In</Link>
                  )}
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignInSide);