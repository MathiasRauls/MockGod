import React, { useState } from 'react';
import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";


function App() {
  const [activeEditorTab, setActiveEditorTab] = useState("");

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas setActiveEditorTab={setActiveEditorTab} />
      <Customizer activeEditorTab={activeEditorTab} setActiveEditorTab={setActiveEditorTab} />
    </main>
  )
}

export default App
