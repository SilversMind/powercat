import React from "react";
import "./App.css";
import {Router} from "./router";
import {ChakraProvider} from "@chakra-ui/react";
function App() {


  return (
      <ChakraProvider>
        <Router />
      </ChakraProvider>
  );
}

export default App;
