import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
