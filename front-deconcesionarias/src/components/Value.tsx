import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { Properties } from "../interfaces/reqRes";
import { useState } from "react";
import { reqResApis } from "../api/reqRes";
import { useContext } from "react";
import { PropertiesContext } from "../contexts/PropertiesContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
    margin: {
      margin: "2vh",
    },
  })
);

export interface Props {
  property: Properties;
}

export default function Value({ property }: Props) {
  const classes = useStyles();
  const { name, value, id } = property;
  const [newValue, setNewValue] = useState<number>(0);
  const { updateProperties } = useContext(PropertiesContext);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleRating = async (rate: number) => {
    const newObject = {
      ...property,
      value: rate,
    };
    updateProperties(id, rate);
    const resp = await reqResApis.put(`/properties/${id}`, newObject);
    setNewValue(rate);
  };
  return (
    <Grid item container xs={12} sm={6}>
      <Grid item xs={12} sm={6}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.root}>
          <Rating
            onClick={handleRating}
            ratingValue={newValue}
            size={20}
            transition
            fillColor="#ffb400"
            emptyColor="#e0e0e0"
            className="foo"
          />
        </div>
      </Grid>
    </Grid>
  );
}
