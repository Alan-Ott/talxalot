import { useState } from "react";
import "./App.css";
import axelot from "./assets/Logo.svg";
import AddTalk from "./components/AddTalk";
import ListTalks from "./components/ListTalks";
import TalkFilter from "./components/TalkFilter";

function App() {
  return (
    <>
      <div>
        <img
          src={axelot}
          className="w-24 h-24 md:w-24 md:h-24 mx-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          alt="Vite logo"
        />
        <h1 className="text-3xl font-bold">Talxalot</h1>
      </div>
      <div className="my-10">
        <AddTalk />
        <TalkFilter />
        <ListTalks />
      </div>
    </>
  );
}

export default App;
