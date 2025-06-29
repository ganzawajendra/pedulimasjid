import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CardDetailPage from "./pages/CardDetailPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ReceiptPage from "./pages/ReceiptPage.jsx";
import AddMasjidPage from "./pages/AddMasjidPage.jsx";
import DashboardPengurusPage from "./pages/DashboardPengurusPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import AdminMasjidPage from "./pages/AdminMasjidPage.jsx";
import AdminDanaPage from "./pages/AdminDanaPage.jsx";
import AdminUserPage from "./pages/AdminUserPage.jsx";
import UpdateMasjidPage from "./pages/UpdateMasjidPage.jsx";
import UpdateDanaPage from "./pages/UpdateDanaPage.jsx";
import UpdateUserPage from "./pages/UpdateUserPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/card-detail/:cardId" element={<CardDetailPage />} />
        <Route path="/payment/:cardId" element={<PaymentPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/form-masjid" element={<AddMasjidPage />} />
        <Route path="/dashboard-pengurus" element={<DashboardPengurusPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />}></Route>
        <Route path="/admin/management-masjid" element={<AdminMasjidPage />}></Route>
        <Route path="/admin/management-dana" element={<AdminDanaPage />}></Route>
        <Route path="/admin/management-user" element={<AdminUserPage />}></Route>
        <Route path="/admin/management-masjid/edit-masjid" element={<UpdateMasjidPage />}></Route>
        <Route path="/admin/management-dana/edit-dana" element={<UpdateDanaPage />}></Route>
        <Route path="/admin/management-user/edit-user" element={<UpdateUserPage />}></Route>
        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  </StrictMode>
);
