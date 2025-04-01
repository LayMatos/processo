import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const SubmitInfo = lazy(() => import("./pages/SubmitInfo"));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div className="text-center p-6">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detalhe/:id" element={<Detail />} />
              <Route path="/informar/:ocoId" element={<SubmitInfo />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
