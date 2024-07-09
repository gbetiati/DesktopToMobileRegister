import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Settings from "./components/Settings";

import RegisterScreen from "./screens/RegisterScreen";
import UsersScreen from "./screens/UsersScreen";
import RoutesListScreen from "./screens/RoutesListScreen";

function App() {
  return (
    <div className="bg from-sky-50 h-screen ">
      <Router>
        <Menu />
        <Routes>
          <Route path="/form" element={<RegisterScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/RoutesListScreen" element={<RoutesListScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
