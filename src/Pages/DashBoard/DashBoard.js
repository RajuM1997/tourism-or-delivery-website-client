import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AddPackage from "../AddPackage/AddPackage";
import AllOrder from "../AllOrder/AllOrder";
import MyOrder from "../MyOrder/MyOrder";
import "./DashBoard.css";

const DashBoard = () => {
  const { user } = useAuth();
  const [control, setControl] = useState("addPackages");
  console.log(user);

  console.log(control);
  return (
    <div className="pt-5">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row">
            <div className="col-md-3">
              <div className="bashboard-manu p-1">
                <div className="all-menu mt-5">
                  {/* user profile start here */}
                  <div className="user text-center d-flex flex-column justify-content-center align-content-center">
                    <img className="mx-auto pb-1" src={user.photoURL} alt="" />
                    <small>{user.email}</small>
                    <small>{user.displayName}</small>
                  </div>
                  {/* user profile end here */}
                  <div className="all-order active">
                    <div className="icon pe-3">
                      <i class="fas fa-gift"></i>
                    </div>
                    <li className="admin-menu p-2">DashBoard</li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <li
                      onClick={() => setControl("allOrder")}
                      className="admin-menu p-2"
                    >
                      All Order
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-baby-carriage"></i>
                    </div>
                    <li
                      onClick={() => setControl("myOrder")}
                      className="admin-menu p-2"
                    >
                      My Order
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-baby-carriage"></i>
                    </div>
                    <li
                      onClick={() => setControl("addPackage")}
                      className="admin-menu p-2"
                    >
                      Add Package
                    </li>
                  </div>

                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-ice-cream"></i>
                    </div>
                    <li className="admin-menu p-2">Package</li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="far fa-user"></i>
                    </div>
                    <li className="admin-menu p-2">Customer</li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "addPackage" && <AddPackage />}
              {control === "allOrder" && <AllOrder />}
              {control === "myOrder" && <MyOrder />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
