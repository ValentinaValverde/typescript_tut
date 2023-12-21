//FC is a type to create a component
import { FC, useEffect, useState } from "react";
import axios from "axios";

//you can use "interface" instead of "type" to declare component types
//this defines the type of the prop
type AppProps = {
  title: string;
};

//defining the types of the data called from the API
//example, when calling first.name
export interface Name {
  first: string;
  last: string;
}

export interface Login {
  uuid: string;
}

export interface Users {
  name: Name;
  login: Login;
  email: string;
}

const App: FC<AppProps> = ({ title }) => {
  //declares users as an array of objects of type Users
  const [users, setUsers] = useState<Users[]>([]);

  //calling 10 random names from an API
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        console.log("DATA", data);
        setUsers(data.results);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
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
