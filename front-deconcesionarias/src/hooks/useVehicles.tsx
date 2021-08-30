import { useEffect, useState } from "react";
import { reqResApis } from "../api/reqRes";
import { Vehicles } from "../interfaces/reqRes";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);

  useEffect(() => {
    cargarVehicles();
  }, []);
  const cargarVehicles = async () => {
    const resp = await reqResApis.get("/vehicles");
    setVehicles(resp.data);
  };

  return {
    vehicles,
  };
};
