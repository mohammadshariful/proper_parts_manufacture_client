import React from "react";
import { toast } from "react-toastify";
const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    const url = `https://manufacture2022.herokuapp.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully make an admin");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button cl onClick={makeAdmin} className="btn btn-xs text-white">
            Make Admin
          </button>
        ) : (
          <p>Admin</p>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
