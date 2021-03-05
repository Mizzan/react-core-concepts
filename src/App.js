// import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import RecipeReviewCard from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Button variant="contained" color="secondary">
        Click
      </Button>

      <RecipeReviewCard></RecipeReviewCard>
    </>
  );
}

export default App;
