import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import ServicosPage from "@/pages/ServicosPage";
import GaleriaPage from "@/pages/GaleriaPage";
import EquipePage from "@/pages/EquipePage";
import ContatoPage from "@/pages/ContatoPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
