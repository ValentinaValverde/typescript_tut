//FC is a type to create a component
import { FC } from "react";

//you can use "interface" instead of "type" to declare component types
//this defines the type of the prop
type AppProps = {
  title: string;
};

const App: FC<AppProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
