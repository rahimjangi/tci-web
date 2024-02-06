import "./App.css";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
