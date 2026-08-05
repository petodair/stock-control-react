import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.tsx";
import Login from "./pages/Login.tsx";
import ProductForm from "./pages/product/ProductForm.tsx";
import Signin from "./pages/Signin.tsx";
import Home from "./pages/Home.tsx";
import ProductList from "./pages/product/ProductList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product">
              <Route path="form" element={<ProductForm />} />
              <Route path="list" element={<ProductList />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </StrictMode>,
);
