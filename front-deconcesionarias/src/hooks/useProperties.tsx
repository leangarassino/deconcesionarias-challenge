import { useContext, useEffect, useState } from "react";
import { reqResApis } from "../api/reqRes";
import { PropertiesContext } from "../contexts/PropertiesContext";
import { Properties } from "../interfaces/reqRes";

export const useProperties = () => {
  const [properties, setProperties] = useState<Properties[]>([]);
  const { chargeProperties } = useContext(PropertiesContext);
  useEffect(() => {
    cargarProperties();
  }, []);
  const cargarProperties = async () => {
    const resp = await reqResApis.get<Properties[]>("/properties");
    setProperties(resp.data);
    chargeProperties(resp.data);
  };

  return {
    properties,
    setProperties,
  };
};
