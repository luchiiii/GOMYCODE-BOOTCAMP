import Welcome from "./components/Welcome";

const alertMyInput = (name) => alert(name);
const App = () => {
  return <Welcome name="Sara" alertMyInput={alertMyInput} />;
};

export default App;
