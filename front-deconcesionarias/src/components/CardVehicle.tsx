import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Vehicles } from "../interfaces/reqRes";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  height: {
    minHeight: "75vh",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  center: {
    textAlign: "center",
    margin: "3%",
  },
  button: {
    color: "white",
    "&:hover": {
      backgroundColor: "#ffb400",
      color: "#111111",
    },
    background: "#111111",
    backgroundColor: "#111111",
    size: "small",
  },
});

interface Props {
  vehicle: Vehicles;
}

export default function CardVehicle({ vehicle }: Props) {
  const classes = useStyles();
  const { name, image, model, brand } = vehicle;
  const history = useHistory();
  const handleProperty = () => {
    history.push("/properties");
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} className={classes.height}>
      <Box
        margin="2vh"
        alignItems="center"
        textAlign="center"
        alignSelf="center"
      >
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {brand}
              <br />
              {model}
            </Typography>
          </CardContent>
          <Box className={classes.center}>
            <Button
              size="medium"
              className={classes.button}
              variant="contained"
              onClick={handleProperty}
            >
              Características
            </Button>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
}
