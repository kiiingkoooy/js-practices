import { Route, Routes } from "react-router-dom";
import ExerciseMenu from "./component/exerciseMenu";
import Exercises from "./pages/exercises";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />}>
          <Route path="/exercises/:exerciseId" element={ExerciseMenu} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
