import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col bg-gray-800 font-Poppins min-h-screen ">
        <Header />

        <div className="flex-1 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
