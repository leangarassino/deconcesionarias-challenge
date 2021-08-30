import React, { useState, useEffect, useContext } from "react";
import Value from "../components/Value";
import { useProperties } from "../hooks/useProperties";
import { Container, Box, Grid, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Properties as PropertiesInterface } from "../interfaces/reqRes";
import CategoriesList from "../components/CategoriesList";
import { PropertiesContext } from "../contexts/PropertiesContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  height: {
    minHeight: "75vh",
  },
  root: {
    margin: "2%",
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

export const Properties = () => {
  useProperties();
  const { chargeProperties, properties } = useContext(PropertiesContext);
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState<PropertiesInterface[]>([]);
  const [buttonId, setButtonId] = useState<number>(1);
  const history = useHistory();

  const filter = () => {
    const filteredData = properties.filter(
      (property) => property.categoryId === buttonId
    );
    setFilteredData(filteredData);
  };

  const onButtonIdChange = (buttonId: number) => {
    setButtonId(buttonId);
    filter();
  };

  useEffect(() => {
    setFilteredData(properties);
    filter();
  }, [properties]);

  useEffect(() => {
    filter();
  }, [buttonId]);

  const handleBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Grid className={classes.height}>
        <Card className={classes.root}>
          <Box>
            <CategoriesList onButtonIdChange={onButtonIdChange} />
          </Box>
          <Box padding="5%">
            <Grid item container xs={12}>
              {filteredData.map((property) => (
                <Value key={property.id} property={property} />
              ))}
            </Grid>
          </Box>
        </Card>
        <Box textAlign="center">
          <Button
            variant="outlined"
            className={classes.button}
            onClick={handleBack}
          >
            Volver
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};
