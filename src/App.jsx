import { Routes, Route } from "react-router-dom";

import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Task1 />} />

      <Route
        path="/task2"
        element={<Task2 />}
      />
    </Routes>
  );
}

export default App;