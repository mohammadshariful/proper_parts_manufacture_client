import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Home/Purchase";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Navbar/Navbar";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
