import { createContext, useState } from "react";
import { Properties } from "../interfaces/reqRes";

interface ContextProps {
  properties: Properties[];
  updateProperties: (id: number, value: number) => void;
  chargeProperties: (properties: Properties[]) => void;
}

export const PropertiesContext = createContext({} as ContextProps);

export const PropertiesProvider = ({ children }: { children: JSX.Element }) => {
  const [properties, setProperties] = useState<Properties[]>([]);

  const updateProperties = (id: number, value: number) => {
    const newArray = properties;
    newArray[id].value = value;
    setProperties(newArray);
  };

  const chargeProperties = (properties: Properties[]) => {
    const newArray = [];
    for (let index = 0; index < properties.length; index++) {
      const property = properties[index];
      newArray[property.id] = property;
    }
    setProperties(newArray);
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        updateProperties,
        chargeProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
