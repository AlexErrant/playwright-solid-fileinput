import type { Component } from "solid-js";

const App: Component = () => (
  <div>
    Select a file!
    <input
      id="selectafile"
      type="file"
      onChange={(e) => {
        console.log("file changed!", e);
      }}
    />
  </div>
);

export default App;
