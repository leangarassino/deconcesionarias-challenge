import { useCategories } from "../hooks/useCategories";
import { Categories } from "../interfaces/reqRes";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    color: "#000a12",
    fontSize: "1.1em",
  },
  background: {
    backgroundColor: "#ffa726",
  },
});

interface Props {
  onButtonIdChange: (buttonId: number) => void;
}

const CategoriesList = ({ onButtonIdChange }: Props) => {
  const classes = useStyles();
  const { categories } = useCategories();

  return (
    <Box
      display="flex"
      flexGrow="1"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      className={classes.background}
    >
      {categories.map((category) => (
        <CategoryElement
          key={category.id}
          onButtonIdChange={onButtonIdChange}
          category={category}
        />
      ))}
    </Box>
  );
};

interface Props2 {
  category: Categories;
  onButtonIdChange: (buttonId: number) => void;
}
const CategoryElement = ({ category, onButtonIdChange }: Props2) => {
  const classes = useStyles();
  const { name, icon, id } = category;
  return (
    <Button onClick={() => onButtonIdChange(id)}>
      <Box display="column" justifyContent="space-evenly">
        <img src={icon} alt={icon} style={{ width: 65, height: 65 }} />
        <Typography className={classes.text}>{name}</Typography>
      </Box>
    </Button>
  );
};

export default CategoriesList;
