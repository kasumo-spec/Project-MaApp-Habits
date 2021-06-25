import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useToken } from "../../hooks/Token";
import { useHeaderStateProvider } from "../../hooks/HeaderState";
import Logomark from "../../assets/horizontal_on_white_by_logaster-_1_.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  image: {
    width: "150px",
    height: "55px",
  },
  MuiAppBar: {
    backgroundColor: "var(--backgroundHeader)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  gutters: {
    [theme.breakpoints.between("xs", 440)]: {
      paddingRight: theme.spacing(0.5),
      paddingLeft: theme.spacing(0.5),
      justifyContent: "space-between",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { firstButton, actualLocation, setActualLocation } =
    useHeaderStateProvider();
  const { setTokenSucess, tokenSucess } = useToken();

  const handleLogout = () => {
    localStorage.clear();
    setTokenSucess(false);
    setActualLocation("/login");
    toast.success("Volte logo!");
    history.push("/login");
  };

  const handlePath = (path) => {
    history.push(path);
    setActualLocation(history.location.pathname);
  };

  const redirectFirst = () => {
    history.push(firstButton);
    setActualLocation(history.location.pathname);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.MuiAppBar}>
        <Toolbar className={classes.gutters}>
          <a href="/">
            <img
              className={classes.image}
              sizes="155 54"
              src={Logomark}
              alt="Logomarca"
            />
          </a>
          <Typography variant="h6" className={classes.title}>
            {" "}
          </Typography>
          {tokenSucess && (
            <>
              <Button onClick={redirectFirst} color="inherit">
                {actualLocation === "/dashboard"
                  ? "Grupos"
                  : actualLocation === "/groups"
                  ? "Hábitos"
                  : "Grupos"}
              </Button>
            </>
          )}

          {tokenSucess ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : actualLocation === "/login" ? (
            <>
              <Button onClick={() => handlePath("/")} color="inherit">
                Home
              </Button>
              <Button onClick={() => handlePath("/register")} color="inherit">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => handlePath("/")} color="inherit">
                Home
              </Button>
              <Button onClick={() => handlePath("/login")} color="inherit">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
