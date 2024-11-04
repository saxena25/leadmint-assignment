import {Routes,Route} from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
