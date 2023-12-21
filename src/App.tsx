//FC is a type to create a component
import { FC, useState } from "react";
import axios from "axios";
import { AppProps, Users } from "./App.types";

const App: FC<AppProps> = ({ title }) => {
  //declares users as an array of objects of type Users
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  //calling 10 random names on button click from an API
  const handleClick = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log("DATA", data);
      setUsers(data.results);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="div">
        <button onClick={handleClick}>Show Users</button>
        <input type="text" onChange={handleChange} />
        <p>{username}</p>
        {loading && <p>Loading...</p>}
      </div>
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
