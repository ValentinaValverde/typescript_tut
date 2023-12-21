//FC is a type to create a component
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { AppProps, Users } from "./App.types";

const App: FC<AppProps> = ({ title }) => {
  //declares users as an array of objects of type Users
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);

  //calling 10 random names from an API
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        console.log("DATA", data);
        setUsers(data.results);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {users.map(({ login, name, email }) => {
          return (
            <li key={login.uuid}>
              <div>
                Name: {name.first} {name.last}
              </div>
              <div>Email: {email}</div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
