import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import UsersLayout from "./layouts/UsersLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
