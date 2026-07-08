import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Favorites from "./pages/Favorites";
import AddRecipe from "./pages/AddRecipe";
import About from "./pages/About";
import DrinkDetails from "./pages/DrinkDetails";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe" element={<AddRecipe />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/drink/:id" element={<DrinkDetails />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.PROD ? "/Tube-Recipe-Book" : "/"}>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
