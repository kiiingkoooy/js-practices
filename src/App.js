import { Route, Routes } from "react-router-dom";
import Exercise from "./component/subcomponent/Exercise";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Store from "./store/Store";

function App() {
  return (
    <>
      <Store>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Menu />} />
          <Route path="/exercises/:exerciseId" element={<Exercise />} />
        </Routes>
      </Store>
    </>
  );
}

export default App;
