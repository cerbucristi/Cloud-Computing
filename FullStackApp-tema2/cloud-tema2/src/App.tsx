import { Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import LogIn from "./LogIn";

const App = () => {
  return (
    <Routes>
      <Route element={<Registration />} path="/register" />
      <Route element={<LogIn />} path="/login" />
    </Routes>
  );
};

export default App;
