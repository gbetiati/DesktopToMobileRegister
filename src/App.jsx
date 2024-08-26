import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/NavBar";

import HomeScreen from "./screens/HomeScreen";
import DetailPage from "./screens/DetailPage";
import RegisterScreen from "./screens/RegisterScreen";
import UsersScreen from "./screens/UsersScreen";
import RoutesListScreen from "./screens/RoutesListScreen";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-200 h-full ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/inicio" element={<HomeScreen />} />
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
