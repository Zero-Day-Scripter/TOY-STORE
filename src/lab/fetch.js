import React, { useState, useEffect } from "react";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>User List</h1>
      <table className="table-light  table-bordered table-hover table-sm">
        <thead>
          <tr color="black">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div class="form-group">
        <input  class="form-control" ></input>
        <button className="danger">ADD</button>
      </div>
    </div>
  );
};

export default FetchComponent;
