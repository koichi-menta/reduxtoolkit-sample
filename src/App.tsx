import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import SettingPage from "./pages/setting/SettingPage";
import SetingConfirmPage from "./pages/setting/SetingConfirmPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import UserDetailPage from "./pages/user/UserDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserListPage />} />
          <Route path="user/:id" element={<UserDetailPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="setting/confirm" element={<SetingConfirmPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
