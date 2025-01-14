import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollToTop(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return <div className="App">
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<home />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
