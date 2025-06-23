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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/card-detail" element={<CardDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/form-masjid" element={<AddMasjidPage />} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  </StrictMode>
);
