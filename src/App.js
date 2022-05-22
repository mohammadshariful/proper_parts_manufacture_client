import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Navbar/Navbar";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
