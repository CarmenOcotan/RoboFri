import axios from "axios";
import { useState, useEffect } from "react";
import { UserList } from "../componentes/UserList";

function ExportApi() {
  const [users, setusers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => getUsers(), []);
 
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default ExportApi;