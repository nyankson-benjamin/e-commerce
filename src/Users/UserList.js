import React, { useEffect } from "react";
import useFetchuser from "./useFetchuser";
import { Link } from "react-router-dom";
function UserList() {
  const [data] = useFetchuser();

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div>
      {data?.map((users) => (
        <div key={users.id} style={{ display: "flex", flexDirection: "row" }}>
          <div className="card">
            <Link to={`/userPage/${users.id}`}>{users.fname}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
