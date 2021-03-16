import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CodeEditor = () => {
  return (
    <div>
      <LiveProvider code="<strong>Hello World!</strong>">
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};

export default CodeEditor;
