//you can use "interface" instead of "type" to declare component types
//this defines the type of the prop

//using the "type":
// type AppProps = {
//   title: string;
// };

//using "interface":
export interface AppProps {
  title: string;
}

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
