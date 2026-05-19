import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AI from "./components/AI";
import Platform from "./components/Platform";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import {
  HomePageStructuredData,
  AIPageStructuredData,
  PlatformPageStructuredData,
  IndustriesPageStructuredData,
  ContactPageStructuredData,
} from "./structured-data";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
};

const AppShell = () => {
  const { pathname } = useLocation();
  const usesContactFooter = pathname === "/contact";

  // Render appropriate structured data based on current route
  const renderStructuredData = () => {
    switch (pathname) {
      case "/":
        return <HomePageStructuredData />;
      case "/ai":
        return <AIPageStructuredData />;
      case "/platform":
        return <PlatformPageStructuredData />;
      case "/industries":
        return <IndustriesPageStructuredData />;
      case "/contact":
        return <ContactPageStructuredData />;
      default:
        return <HomePageStructuredData />;
    }
  };

  return (
    <>
      <ScrollToTop />
      {/* JSON-LD Structured Data */}
      {renderStructuredData()}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!usesContactFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
