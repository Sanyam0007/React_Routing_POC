import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatchRoute } from "./components/NoMatchRoute";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";
const LazyAbout = React.lazy(()=>import('./components/About'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={
          <React.Suspense fallback="loading...">
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path="orderSummary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="features" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="user" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </>
  );
}

export default App;
