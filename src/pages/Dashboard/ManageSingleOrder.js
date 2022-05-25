import React from "react";

const ManageSingleOrder = ({ index, order, refetch }) => {
  const handleStatus = (id) => {
    const url = `http://localhost:5000/manageOrder/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.upsertedCount) {
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src={order?.img} alt={order?.purchaseName} />
          </div>
        </div>
      </td>
      <td>{order?.purchaseName}</td>

      <td>
        {order?.paid ? (
          <p className="text-success">Paid</p>
        ) : (
          <p className="text-error">UnPaid</p>
        )}
      </td>
      <td>
        <p className="font-bold">{order?.status}</p>
        {order?.status === "pending" && (
          <button
            onClick={() => handleStatus(order?._id)}
            className="btn btn-sm capitalize font-normal text-white "
          >
            Shipped
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error text-white btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default ManageSingleOrder;
