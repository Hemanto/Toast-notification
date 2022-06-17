import { withToastrProvider } from "./Toastr";
import "./styles.css";
import Child from "./Child";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Child />
    </div>
  );
};

export default withToastrProvider(App);
