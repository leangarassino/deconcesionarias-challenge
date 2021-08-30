import { useEffect, useState } from "react";
import { reqResApis } from "../api/reqRes";
import { Categories } from "../interfaces/reqRes";

export const useCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    cargarCategories();
  }, []);
  const cargarCategories = async () => {
    const resp = await reqResApis.get("/categories");
    setCategories(resp.data);
  };

  return {
    categories,
  };
};
