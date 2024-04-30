import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import SettingPage from "./pages/setting/SettingPage";
import UserEditConfirmPage from "./pages/user/UserEditConfirmPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import UserDetailPage from "./pages/user/UserDetailPage";
import CreatePage from "./pages/user/CreatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserListPage />} />
          <Route path="user/create" element={<CreatePage />} />
          <Route path="user/:id" element={<UserDetailPage />} />
          <Route path="user/confirm" element={<UserEditConfirmPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
