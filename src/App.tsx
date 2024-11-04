import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button el="button" type="submit">
          Submit
        </Button>{" "}
        <Button el="link" href="/">
          Link
        </Button>
      </p>
    </main>
  );
}

export default App;
