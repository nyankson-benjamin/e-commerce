import React, { useEffect } from "react";
import useFetchuser from "./useFetchuser";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const { id } = useParams();
  const [data] = useFetchuser();

  const user = data?.find((user) => user.id === Number(id));

  useEffect(() => {
    console.log("Users", user);
  });
  return (
    <div className="card">
      {user && (
        <div>
          <p>{`${user.fname} ${user.lname}`} </p>
          <p>{user.email}</p>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default UserPage;
