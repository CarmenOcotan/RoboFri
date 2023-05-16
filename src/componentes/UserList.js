import React from "react";

export const UserList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="user-card" >
          {" "}
          <img src ={`https://robohash.org/${user.id}`} alt="robot-pic" style={{width: "200px", height: "200px"}}></img>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>
        </div>
      ))}
    </div>
  );
};