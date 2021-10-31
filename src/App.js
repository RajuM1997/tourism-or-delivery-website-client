import "./App.css";
import AuthProvider from "./Pages/AuthContext/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Share/Header/Header";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Share/Footer/Footer";
import TourPackage from "./Pages/TourPackage/TourPackage";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import FAQ from "./Pages/FAQ/FAQ";
import AllOrder from "./Pages/AllOrder/AllOrder";
import Blog from "./Pages/Blog/Blog";
import MyOrder from "./Pages/MyOrder/MyOrder";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Testimonial from "./Pages/Testimonial/Testimonial";
import About from "./Pages/About/About";
import AddPackage from "./Pages/AddPackage/AddPackage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/package">
              <TourPackage />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/orderPlace/:id">
              <OrderPlace />
            </PrivateRoute>
            <PrivateRoute path="/dashborad">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/allOrder">
              <AllOrder />
            </PrivateRoute>
            <Route path="/addPackage">
              <AddPackage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
