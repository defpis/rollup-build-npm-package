import "./App.scss";

// import { greet } from "pkg01";
// const { greet } = require("pkg01");

// import { greet } from "pkg02";
// const { greet } = require("pkg02");

// import { Input } from "pkg03";
// const { Input } = require("pkg03");

import { Case1 } from "./cases/case1";
import { Case2 } from "./cases/case2";

// import { ArcoInput } from "pkg05";

export function App() {
  // greet();

  return (
    <>
      <h1>Hello World!</h1>

      {/* <Input></Input> */}

      <Case1></Case1>
      {/* <Case2></Case2> */}

      {/* <ArcoInput></ArcoInput> */}
    </>
  );
}
