import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ManageSingleOrder from "./ManageSingleOrder";
const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/manageOrder", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-center text-xl">
        Manage all orders({orders.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>List</th>
              <th>Picture</th>
              <th>Order Name</th>
              <th>Pay Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageSingleOrder
                key={order?._id}
                index={index}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
