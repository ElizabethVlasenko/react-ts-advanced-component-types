import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Container as={Button}>Click me</Container>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" ref={input} />
      <p>
        <Button type="submit">Submit</Button> <Button href="/">Link</Button>
      </p>
    </main>
  );
}

export default App;
