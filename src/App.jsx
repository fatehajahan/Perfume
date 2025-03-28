import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import Home from "./mainPage/Home/Home"
import Navbar from "./components/Home/Navbar/Navbar";
import BroughtPage from "./mainPage/BroughtPageBlue/BroughtPage";
import BroughtPageOrange from "./mainPage/BroughtPageOrange/BroughtPageOrange";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import AddCart from "./mainPage/AddCart/AddCart";
import ViewCart from "./mainPage/ViewCart/ViewCart";
import Registration from "./mainPage/Registration/Registration";
import Login from "./mainPage/Login/Login";

const Layout = () => {
  const [cartOpen, setCartOpen] = useState(false)
  console.log("Layout is rendering, setCartOpen exists:", typeof setCartOpen);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} />
      <AddCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Outlet />
      {cartOpen && (
        <div
          className="fixed inset-0 bg-[#00000049]"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bluePerfume" element={<BroughtPage />} />
        <Route path="/orangePerfume" element={<BroughtPageOrange />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycart" element={<ViewCart />} />
      </Route>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
