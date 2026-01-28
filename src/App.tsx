import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-hero-glow">
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
