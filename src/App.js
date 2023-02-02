import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import PostsManagePage from "./pages/PostsManagePage";
import SettingsPages from "./pages/SettingsPage";
import ChartLine from "./module/Chart/ChartLine";
import ChartColumn from "./module/Chart/ChartColumn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route
              path="/dashboard/subcription"
              element={<ChartLine />}
            ></Route>
            <Route path="/dashboard/evenue" element={<ChartColumn />}></Route>
          </Route>
          <Route path="/post-manage" element={<PostsManagePage />}></Route>
          <Route path="/settings" element={<SettingsPages />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
