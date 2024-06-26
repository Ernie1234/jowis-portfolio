import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, NotFound, Work } from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
