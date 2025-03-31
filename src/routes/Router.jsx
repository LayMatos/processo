import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header"; // Importação do Header

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));
const SubmitInfo = lazy(() => import("../pages/SubmitInfo"));

const AppRoutes = () => {
  return (
    <Router>
      <Header /> {/* Header fixo no topo */}
      <Suspense fallback={<div className="text-center mt-10">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhe/:id" element={<Detail />} />
          <Route path="/informar/:id" element={<SubmitInfo />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
