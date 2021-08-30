import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";

import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: "inherit",
      textDecoration: "inherit",
    },
    background: {
      backgroundColor: "#111111",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const handleLogin = () => {
    history.push("/api");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              deConcesionarias
            </Link>
          </Typography>

          <Button variant="text" color="inherit" onClick={handleLogin}>
            Cars
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
