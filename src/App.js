import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./pages/Blogs/Blogs";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import NotFound from "./pages/NotFound/NotFound";
import Purchase from "./pages/Purchase/Purchase";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />} />
          <Route path="review" element={<AddReview />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="manageOrder" element={<ManageOrders />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="admin" element={<Users />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="payment/:id" element={<Payment />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
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
