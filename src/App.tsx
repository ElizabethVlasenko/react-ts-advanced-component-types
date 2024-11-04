import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Container as={Button}>Click me</Container>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button type="submit">Submit</Button> <Button href="/">Link</Button>
      </p>
    </main>
  );
}

export default App;
