import React from "react";
import Editor from "react-code-live";
import styled from "styled-components";
import styles from "./styles.module.css";

const initialCss = `
.__custom__live__react__ {
width:150px;
height:150px;
background:tomato;
color:#FFF;
display:flex;
border-radius: 50%;
justify-content:center;
align-items:center;
padding:5px;
}
.__custom__live__react__ > h5 {
text-align: center;
}
`;

const functionExample = `function Test () {
  return (
    <div className="__custom__live__react__">
      <h5>Functional Component</h5>
    </div>
    )
}`;

const CodeEditor = () => {
  return (
    <div>
      <Editor
        className={styles.container}
        initialCode={functionExample}
        initialCss={initialCss}
        textAreaClassName={styles.custom}
        scope={{ styled: functionExample.scope?.styled && styled }}
      />
    </div>
  );
};

export default CodeEditor;
