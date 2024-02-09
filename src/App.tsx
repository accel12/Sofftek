import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import "./styles/fonts.css";
import "./App.css";
import Planes from "./pages/Planes";
import Resumen from "./pages/Resumen";
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="Sofftek/" element={<Home />} />
          <Route path="Sofftek/Planes" element={<Planes />} />
          <Route path="Sofftek/Resumen" element={<Resumen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
