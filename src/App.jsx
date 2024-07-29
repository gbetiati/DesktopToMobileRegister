import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Menu from "./components/Menu";

import DetailPage from "./screens/DetailPage";
import RegisterScreen from "./screens/RegisterScreen";
import UsersScreen from "./screens/UsersScreen";
import RoutesListScreen from "./screens/RoutesListScreen";

function App() {
  return (
    <div className="bg from-sky-50 h-screen ">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/form" element={<RegisterScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/RoutesListScreen" element={<RoutesListScreen />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
