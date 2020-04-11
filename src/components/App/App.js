import React, { useState } from "react";

import { Editor } from "../Editor/Editor";
import { Monitor } from "../Monitor/Monitor";

import "./App.css";


function App() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("editorValue") || ""
  );  
  
  return (
    <div className="App">
      <header>
        <i class="fab fa-markdown"></i> Simple Markdown Editor
      </header>
      <main className="columns">
        <Editor inputValue={inputValue} 
                stateUpdate={setInputValue} />
        <Monitor inputValue={inputValue} />
      </main>
    </div>
  );
}

export default App;
