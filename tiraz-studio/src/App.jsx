import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import QuoteCalculator from "./pages/QuoteCalculator";
import OrderWorkspace from "./pages/OrderWorkspace";
import Materials from "./pages/Materials";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/new" element={<QuoteCalculator />} />
          <Route path="orders/:id" element={<OrderWorkspace />} />
          <Route path="materials" element={<Materials />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}