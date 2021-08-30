import { Container, Box, Grid, Typography } from "@material-ui/core";
import CardVehicle from "../components/CardVehicle";
import { useVehicles } from "../hooks/useVehicles";

export const Api = () => {
  const { vehicles } = useVehicles();
  return (
    <Container>
      <Box textAlign="center" margin="2%">
        <Typography variant="h4">Todos los Vehículos</Typography>
      </Box>
      <Grid item container xs={12}>
        {vehicles.map((vehicle) => (
          <CardVehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </Grid>
    </Container>
  );
};
