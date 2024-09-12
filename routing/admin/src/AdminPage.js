import React from "react";
import {useParams, Link, Navigate} from "react-router-dom";

function AdminPage() {
  const { username } = useParams();

 // if(username !== "admin") {
 //     return <Navigate to="/" />
 // }

  return (
    <div>
      <h1>Welcome back {username}!</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default AdminPage;
