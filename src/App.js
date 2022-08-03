import { useRef } from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [about, contact, footer] = [useRef(), useRef(), useRef()];

  return (
    <div className="">
      <Header {...{ about, contact, footer }} />
      <Content {...{ about, contact, footer }} />
      <Footer {...{ about, contact, footer }} />
    </div>
  );
}

export default App;
