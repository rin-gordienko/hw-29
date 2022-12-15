import { ChakraProvider } from "@chakra-ui/react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
